import { groupRepository } from './repositories/groupRepository.js'

const create = {
  signature: '!create-group',
  helpMessage: 'Usage: !create-group <name> <safe space separated description>',
  active: true,
  async handle (message, name, ...welcomeMessage) {
    if (!name) {
      await message.reply(create.helpMessage)
      return
    }

    await groupRepository.store(name, welcomeMessage.join(' '))
  }
}

export { create }