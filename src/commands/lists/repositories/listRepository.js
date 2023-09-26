const lists = {}

const listRepository = {
  async store (ownerId, name, description) {
    if (!description) {
      description = ''
    }

    if (!lists[ownerId]) {
      lists[ownerId] = {}
    }

    lists[ownerId][name] = {
      name,
      description,
      items: []
    }
  },
  all (ownerId) {
    if (!lists[ownerId]) {
      return []
    }

    return Object.values(lists[ownerId])
  },
  get (ownerId, id) {
    if (!lists[ownerId]) {
      return []
    }

    return lists[ownerId][id]
  },
  async addItem (ownerId, id, description) {
    lists[ownerId][id].items.push(description)
  }
}

module.exports = listRepository