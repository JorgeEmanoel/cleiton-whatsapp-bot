import { logger } from '../helpers/logger.js'

const messageHandler = {
  async handle (message) {
    const { notifyName: from, body: content, isStatus } = message._data

    if (Boolean(process.env.LOG_MESSAGES) && !isStatus) {
      logger.info(`Message - ${from} said: ${content}`)
    }
  }
}
  

export { messageHandler }
