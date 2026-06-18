import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  username: string
  email: string
  githubId?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    githubId: { type: String },
    avatar: { type: String },
  },
  { timestamps: true }
)

export default mongoose.model<IUser>('User', UserSchema)
