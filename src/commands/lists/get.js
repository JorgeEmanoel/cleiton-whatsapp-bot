const listRepository = require('~/repositories/listRepository.js')

const get = {
  signature: '!lists',
  async handle () {
    const lists = await listRepository.get()
    const formatedLists = lists.map(({ name, welcomeMessage }) => `- ${name}: "${welcomeMessage}"`).join('\n')

    return {
      reply: formatedLists
    }
  }
}

module.exports = get