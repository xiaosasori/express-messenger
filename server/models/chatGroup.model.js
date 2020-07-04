import mongoose from 'mongoose'

let Schema = mongoose.Schema

const ChatGroupSchema = new Schema({
  name: String,
  userAmount: { type: Number, min: 3, max: 177 },
  messageAmount: { type: Number, default: 6 },
  userId: String,
  members: [
    { userId: String }
  ],
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
})

export default mongoose.model('chat-group', ChatGroupSchema)