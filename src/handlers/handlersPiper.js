import { logger } from '../helpers/logger.js'

import { messageHandler } from './messageHandler.js'
import { commandHandler } from './commandHandler.js'

const pipe = async ({ message, replyOnError }, [...handlers]) => {
  for (let handler of handlers) {
    try {
      await handler.handle(message)
    } catch (e) {
      logger.error(`Failed to handle message "${message.body}": ${e.message}`)

      if (replyOnError) {
        await message.reply('It was not possible to handle your request.')
      }
    }
  }
}

const handlersPiper = {
  async handle (message) {
    await pipe({
      message,
      replyOnError: Boolean(process.env.REPLY_ON_ERROR)
    }, [
      messageHandler,
      commandHandler
    ])
  }
}

export { handlersPiper }