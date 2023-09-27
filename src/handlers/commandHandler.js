import { logger } from '../helpers/logger.js'
import { groupsCommands } from '../commands/groups/index.js'
import { listsCommands } from '../commands/lists/index.js'
import { cowsayCommands } from '../commands/cowsay/index.js'

const commandMapping = {
  [groupsCommands.create.signature]: groupsCommands.create,
  [groupsCommands.get.signature]: groupsCommands.get,
  [listsCommands.create.signature]: listsCommands.create,
  [listsCommands.all.signature]: listsCommands.all,
  [listsCommands.get.signature]: listsCommands.get,
  [listsCommands.add.signature]: listsCommands.add,
  [listsCommands.remove.signature]: listsCommands.remove,
  [cowsayCommands.say.signature]: cowsayCommands.say
}

const unhandledCommand = {
  reply: ''
}

const commandHandler = {
  async handle (message) {
    const [commandSignature, ...args] = message._data.body.split(' ')
    const commandHandler = commandMapping[commandSignature]
    
    if (!commandHandler) {
      return unhandledCommand
    }
    
    logger.debug({ commandSignature, args })
    await commandHandler.handle(message, ...args)
  }
}

export { commandHandler }