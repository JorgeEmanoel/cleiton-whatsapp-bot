const logger = require('~/helpers/logger')

const messageRepository = require('~/repositories/messageRepository')

const messageHandler = {
  async handle (message) {
    const { notifyName: from, body: content } = message._data

    logger.info(`Message - ${from} said: ${content}`)
    await messageRepository.store(message)
  }
}
  

module.exports = messageHandler
