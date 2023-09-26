const messages = []

const messageRepository = {
  store (message) {
    messages.push(message)
  }
}

module.exports = messageRepository
