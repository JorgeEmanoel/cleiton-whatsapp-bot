const logger = require('~/helpers/logger')

const listRepository = require('./repositories/listRepository')

const remove = {
  signature: '!list',
  helpMessage: 'Usage: !list <name>',
  active: true,
  async handle (message, name) {
    const list = await listRepository.find(message.from, name)

    if (!list) {
      await message.reply(`List "${id}" not found`)
      return
    }

    await listRepository.remove(message.from, name)
    await message.reply(`List "${name}" removed.`)
  }
}

module.exports = remove