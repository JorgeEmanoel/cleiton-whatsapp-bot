const messages = []

const messageRepository = {
  store (message) {
    messages.push(message)
  }
}

export { messageRepository }
