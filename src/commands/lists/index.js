const create = require('./create')
const get = require('./get')
const all = require('./all')
const add = require('./add')

const listsCommand = {
  create,
  get,
  all,
  add
}

module.exports = listsCommand