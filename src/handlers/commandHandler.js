const logger = require('~/helpers/logger')
const groupsCommands = require('~/commands/groups/index')
const listsCommands = require('~/commands/lists/index')

const commandMapping = {
  [groupsCommands.create.signature]: groupsCommands.create,
  [groupsCommands.get.signature]: groupsCommands.get,
  [listsCommands.create.signature]: listsCommands.create,
  [listsCommands.all.signature]: listsCommands.all,
  [listsCommands.get.signature]: listsCommands.get,
  [listsCommands.add.signature]: listsCommands.add
}

const unhandledCommand = {
  reply: ''
}

const commandHandler = {
  async handle (message) {
    const [commandSignature, ...args] = message._data.body.split(' ')
    const commandHandler = commandMapping[commandSignature]
    logger.debug({ commandSignature, args })

    if (!commandHandler) {
      return unhandledCommand
    }

    await commandHandler.handle(message, ...args)
  }
}

module.exports = commandHandler