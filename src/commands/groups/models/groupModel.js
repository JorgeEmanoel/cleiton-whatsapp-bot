import mongoose from "mongoose"

const Schema = mongoose.Schema

const GroupSchema = new Schema({
  name: String,
  welcomeMessage: String,
  config: Object
})

const GroupModel = mongoose.model('group', GroupSchema)

export { GroupModel }