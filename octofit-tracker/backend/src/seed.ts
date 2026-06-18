import mongoose from 'mongoose'
import User from './models/User'
import Goal from './models/Goal'
import Workout from './models/Workout'

const MONGODB_URI = 'mongodb://localhost:27017/octofit-tracker'

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')

    // Clear existing data
    await User.deleteMany({})
    await Goal.deleteMany({})
    await Workout.deleteMany({})
    console.log('Cleared existing data')

    // Create sample users
    const users = await User.insertMany([
      {
        username: 'octodev',
        email: 'octodev@example.com',
        githubId: 'octodev123',
        avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
      },
      {
        username: 'fitcoder',
        email: 'fitcoder@example.com',
        githubId: 'fitcoder456',
        avatar: 'https://avatars.githubusercontent.com/u/2?v=4',
      },
    ])
    console.log(`Created ${users.length} users`)

    // Create sample goals
    const goals = await Goal.insertMany([
      {
        userId: users[0]._id,
        title: 'Run 5K',
        description: 'Complete a 5K run in under 30 minutes',
        targetValue: 5,
        currentValue: 2.5,
        unit: 'km',
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        status: 'active',
      },
      {
        userId: users[0]._id,
        title: 'Build Muscle',
        description: 'Increase bench press by 20 lbs',
        targetValue: 220,
        currentValue: 185,
        unit: 'lbs',
        dueDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
        status: 'active',
      },
      {
        userId: users[1]._id,
        title: 'Yoga Streak',
        description: 'Complete 30 days of yoga',
        targetValue: 30,
        currentValue: 12,
        unit: 'days',
        dueDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
        status: 'active',
      },
    ])
    console.log(`Created ${goals.length} goals`)

    // Create sample workouts
    const workouts = await Workout.insertMany([
      {
        userId: users[0]._id,
        goalId: goals[0]._id,
        title: 'Morning Run',
        description: 'Easy pace 3K run',
        duration: 30,
        caloriesBurned: 300,
        exerciseType: 'running',
        intensity: 'medium',
        completedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      },
      {
        userId: users[0]._id,
        goalId: goals[1]._id,
        title: 'Chest Day',
        description: 'Bench press and dumbbell exercises',
        duration: 60,
        caloriesBurned: 400,
        exerciseType: 'strength',
        intensity: 'high',
        completedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      },
      {
        userId: users[1]._id,
        goalId: goals[2]._id,
        title: 'Morning Yoga',
        description: 'Vinyasa flow session',
        duration: 45,
        caloriesBurned: 150,
        exerciseType: 'yoga',
        intensity: 'low',
        completedAt: new Date(Date.now()),
      },
    ])
    console.log(`Created ${workouts.length} workouts`)

    console.log('✅ Database seeding completed successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Database seeding failed:', error)
    process.exit(1)
  }
}

seedDatabase()
