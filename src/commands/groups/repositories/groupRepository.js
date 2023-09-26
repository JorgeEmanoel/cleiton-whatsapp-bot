const groups = {}

const groupRepository = {
  async store (name, welcomeMessage) {
    if (!welcomeMessage) {
      welcomeMessage = ''
    }

    groups[name] = {
      name,
      welcomeMessage
    }
  },
  async get () {
    return Object.values(groups)
  }
}

module.exports = groupRepository