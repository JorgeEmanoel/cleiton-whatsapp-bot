import { listRepository } from './repositories/listRepository.js'

const get = {
  signature: '!list',
  helpMessage: 'Usage: !list <name>',
  active: true,
  async handle (message, name) {
    const list = await listRepository.find(message.from, name)

    if (!list) {
      await message.reply(`List "${id}" not found`)
      return
    }

    const items = await listRepository.find(message.from, name)

    const formatedItems = items.map((item, i) => `${i + 1}. ${item.description}`)
    formatedItems.unshift(`*${name}*: \n`)

    await message.reply(formatedItems.join('\n'))
  }
}

export { get }