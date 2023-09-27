import mongoose from "mongoose"

const Schema = mongoose.Schema

const EventSchema = new Schema({
  name: String,
  description: String,
  scheduledTo: Date,
  ownerId: String
})

const EventModel = mongoose.model('event', EventSchema)

export { EventModel }