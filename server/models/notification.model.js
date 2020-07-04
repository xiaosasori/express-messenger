import mongoose from 'mongoose'

let Schema = mongoose.Schema

const NotificationSchema = new Schema({
  sender: { id: String, username: String, avatar: String },
  receiver: { id: String, username: String, avatar: String },
  type: String,
  content: String,
  isRead: { type: Boolean, default: false },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
})

export default mongoose.model('notification', NotificationSchema)