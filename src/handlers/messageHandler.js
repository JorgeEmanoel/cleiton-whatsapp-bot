const logger = require('~/helpers/logger.js')

const messageRepository = require('~/repositories/messageRepository.js')
const commandHandler = require('~/handlers/commandHandler')

const messageHandler = async (message) => {
  const { notifyName: from, body: content } = message._data

  logger.info(`Message - ${from} said: ${content}`)
  await messageRepository.store(message)
  const handledCommand = await commandHandler.handle(content)

  if (handledCommand.reply) {
    message.reply(handledCommand.reply)
  }
}

module.exports = messageHandler
