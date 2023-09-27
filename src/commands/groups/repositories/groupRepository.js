import { GroupModel } from "../models/groupModel.js"

const groupRepository = {
  async store (name, welcomeMessage) {
    if (!welcomeMessage) {
      welcomeMessage = ''
    }

    await GroupModel.create({
      name,
      welcomeMessage
    })
  },
  async get () {
    return GroupModel.find()
  }
}

export { groupRepository }