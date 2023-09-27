import { listRepository } from './repositories/listRepository.js'

const create = {
  signature: '!list-create',
  helpMessage: 'Usage: !create-list <name> <safe space separated description>',
  active: true,
  async handle (message, name, ...description) {
    if (!name) {
      await message.reply(create.helpMessage)
      return
    }

    await listRepository.store(message.from, name, description.join(' '))
    await message.reply(`List ${name} successfuly created! Use !lists to see your lists`)
  }
}

export { create }