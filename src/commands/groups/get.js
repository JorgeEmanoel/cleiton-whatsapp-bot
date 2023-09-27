import { groupRepository } from './repositories/groupRepository.js'

const get = {
  signature: '!groups',
  helpMessage: 'Usage: !groups',
  active: true,
  async handle () {
    const lists = await groupRepository.get()
    const formatedLists = lists.map(({ name, welcomeMessage }) => `- ${name}: "${welcomeMessage}"`).join('\n')

    await message.reply(formatedLists)
  }
}

export { get }