const logger = {
  info (...messages) {
    console.log(`[INFO ${new Date()}]`, ...messages)
  },
  debug (...messages) {
    console.log(`[DEBUG ${new Date()}]`, ...messages)
  },
  error (...messages) {
    console.error(`[ERROR ${new Date()}]`, ...messages)
  },
}

module.exports = logger
