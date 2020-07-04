import mongoose from 'mongoose'

let Schema = mongoose.Schema

const MessageSchema = new Schema({
  sender: { id: String, username: String, avatar: String },
  receiver: { id: String, username: String, avatar: String },
  text: String,
  file: { data: Buffer, contentType: String, fileName: String },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
})

export default mongoose.model('message', MessageSchema)