const listRepository = require('~/repositories/listRepository.js')

const create = {
  signature: '!create',
  async handle (listName, ...welcomeMessage) {
    await listRepository.store(listName, welcomeMessage.join(' '))
    return {}
  }
}

module.exports = create