import { ListModel } from "../models/listModel.js"
import { ListItemModel } from "../models/listItemModel.js"

const listRepository = {
  async store (ownerId, name, description) {
    if (!description) {
      description = ''
    }

    await ListModel.create({
      name,
      description,
      ownerId
    })
  },
  async all (ownerId) {
    return ListModel.find({
      ownerId
    })
  },
  async find (ownerId, name) {
    const list = await ListModel.find({
      name,
      ownerId
    })

    return list
  },
  async addItem (ownerId, listId, description) {
    const list = await ListModel.findOne({
      name: listId,
      ownerId
    })

    if (!list) {
      return 
    }

    await ListItemModel.create({
      listId,
      description
    })
  },
  async items (ownerId, listId) {
    const list = await ListModel.findOne({
      name: listId,
      ownerId
    })

    if (!list) {
      return []
    }

    return await ListItemModel.find({
      listId
    })
  },
  async remove (ownerId, listId) {
    await ListModel.findOneAndDelete({
      name: listId,
      ownerId
    })
  }
}

export { listRepository }