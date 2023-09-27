import { logger } from '../../helpers/logger.js'

import { listRepository } from './repositories/listRepository.js'

const remove = {
  signature: '!list-remove',
  helpMessage: 'Usage: !remove <name>',
  active: true,
  async handle (message, name) {
    const list = await listRepository.remove(message.from, name)

    if (!list) {
      await message.reply(`List "${name}" not found`)
      return
    }

    await message.reply(`List "${name}" removed.`)
  }
}

export { remove }