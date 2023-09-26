const logger = require('~/helpers/logger.js')
const listsCommand = require('~/commands/lists/index.js')

const commandMapping = {
  [listsCommand.create.signature]: listsCommand.create,
  [listsCommand.get.signature]: listsCommand.get
}

const unhandledCommand = {
  reply: ''
}

const commandHandler = {
  async handle (body) {
    const [commandSignature, ...args] = body.split(' ')
    const commandHandler = commandMapping[commandSignature]
    logger.debug({ commandSignature, args })

    if (!commandHandler) {
      return unhandledCommand
    }

    const handledCommand =  await commandHandler.handle(...args)
    logger.debug({ handledCommand })
    return handledCommand
  }
}

module.exports = commandHandler