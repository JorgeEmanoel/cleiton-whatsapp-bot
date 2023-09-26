const lists = {}

const listRepository = {
  store (name, welcomeMessage) {
    if (!welcomeMessage) {
      welcomeMessage = ''
    }

    lists[name] = {
      name,
      welcomeMessage
    }

    console.log({ lists })
  },
  get () {
    return Object.values(lists)
  }
}

module.exports = listRepository