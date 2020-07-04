import mongoose from 'mongoose'

let Schema = mongoose.Schema

const ContactSchema = new Schema({
  username: String,
  userId: { type: String, required: true },
  contactId: { type: String, required: true },
  status: { type: Boolean, default: false },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
})

export default mongoose.model('contact', ContactSchema)