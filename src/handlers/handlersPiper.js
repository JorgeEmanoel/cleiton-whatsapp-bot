const logger = require('~/helpers/logger')

const messageHandler = require('./messageHandler')
const commandHandler = require('./commandHandler')

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
      replyOnError: true
    }, [
      messageHandler,
      commandHandler
    ])
  }
}

module.exports = handlersPiper