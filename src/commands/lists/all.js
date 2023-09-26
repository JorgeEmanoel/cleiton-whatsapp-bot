const logger = require('~/helpers/logger')

const listRepository = require('./repositories/listRepository')

const all = {
  signature: '!lists',
  helpMessage: '',
  active: true,
  async handle (message) {
    const lists = await listRepository.all(message.from)
    const formatedLists = lists.map(({ name, description }, i) => `${i + 1}. ${name}: "${description}"`)
    formatedLists.unshift('Here is your lists: \n\n')

    await message.reply(formatedLists.join('\n'))
  }
}

module.exports = all