import mongoose from "mongoose"

const Schema = mongoose.Schema

const ListItemSchema = new Schema({
  description: String,
  listId: String
})

const ListItemModel = mongoose.model('list_item', ListItemSchema)

export { ListItemModel }