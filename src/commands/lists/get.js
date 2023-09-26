const logger = require('~/helpers/logger')

const listRepository = require('./repositories/listRepository')

const get = {
  signature: '!list',
  helpMessage: 'Usage: !list <name>',
  active: true,
  async handle (message, id) {
    const list = await listRepository.get(message.from, id)

    if (!list) {
      await message.reply(`List "${id}" not found`)
      return
    }

    const items = list.items.map((item, i) => `${i + 1}. ${item}`)
    items.unshift(`*${list.name}*: \n\n`)

    await message.reply(items.join(' '))
  }
}

module.exports = get