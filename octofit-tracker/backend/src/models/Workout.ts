import mongoose, { Schema, Document } from 'mongoose'

export interface IWorkout extends Document {
  userId: mongoose.Types.ObjectId
  goalId?: mongoose.Types.ObjectId
  title: string
  description: string
  duration: number
  caloriesBurned: number
  exerciseType: string
  intensity: 'low' | 'medium' | 'high'
  completedAt: Date
  createdAt: Date
  updatedAt: Date
}

const WorkoutSchema = new Schema<IWorkout>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    goalId: { type: Schema.Types.ObjectId, ref: 'Goal' },
    title: { type: String, required: true },
    description: { type: String },
    duration: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    exerciseType: { type: String, required: true },
    intensity: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true }
)

export default mongoose.model<IWorkout>('Workout', WorkoutSchema)
