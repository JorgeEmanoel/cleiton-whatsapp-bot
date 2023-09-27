import { exec } from 'child_process'

import { logger } from '../../helpers/logger.js'

const say = {
  signature: '!cowsay',
  helpMessage: 'Usage: !cowsay your message here',
  active: true,
  async handle (message, ...say) {
    const text = say.join(' ')
    exec(`cowsay ${text}`, async (error, output) => {
      if (error) {
        logger.error(`Failed to cowsay "${text}"`)
        return
      }
      
      await message.reply(output)
    })
  }
}

export { say }