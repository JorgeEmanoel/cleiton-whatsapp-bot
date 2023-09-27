import mongoose from "mongoose"

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  name: String,
  description: String,
  ownerId: String
})

const ListModel = mongoose.model('list', ListSchema)

export { ListModel }