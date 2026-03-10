import { getDb } from '../database/mongo.js'
import { ObjectId } from 'mongodb'

export async function findByUsername(username) {
  const db = getDb()

  return db.collection('users').findOne({
    username: username
  })
}

export async function findById(userId) {
  const db = getDb()

  return db.collection('users').findOne({
    _id: new ObjectId(userId),
  })
}

export async function create(user) {
  const db = getDb()

  try {
    await db.collection('users').insertOne(user)
    return user
  } catch (error) {
    if (error.code === 11000) {
      throw new Error('user already exists')
    }

    throw error
  }
}

export async function update(userId, data) {
  const db = getDb()

  const result = await db.collection("users").findOneAndUpdate(
    { _id: new ObjectId(userId) },
    { $set: data },
    { returnDocument: "after" }
  )

  return result
}
export async function remove(userId) {
  const db = getDb()

  return db.collection('users').deleteOne({
    _id: new ObjectId(userId),
  })
}
