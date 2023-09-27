import { logger } from '../../helpers/logger.js'

import { listRepository } from './repositories/listRepository.js'

const all = {
  signature: '!lists',
  helpMessage: '',
  active: true,
  async handle (message) {
    const lists = await listRepository.all(message.from)
    const formatedLists = lists.map(({ name, description }, i) => `${i + 1}. ${name}: "${description}"`)
    formatedLists.unshift('Here is your lists: \n\n')

    logger.debug({ lists })

    await message.reply(formatedLists.join('\n'))
  }
}

export { all }