import bcrypt from 'bcrypt'
import * as userRepository from '../repositories/userRepositoryMongo.js'

export async function findById(userId) {
  const user = await userRepository.findById(userId)
  if (!user) {
    return null
  }

  delete user.password
  return user
}

export async function create(data) {
  const hashedPassword = await bcrypt.hash(data.password, 14)

  const user = await userRepository.create({
    ...data,
    password: hashedPassword,
  })

  delete user.password
  return user
}

export async function update(userId, data) {
  const updateData = { ...data }

  if (data.password) {
    updateData.password = await bcrypt.hash(data.password, 14)
  }

  const user = await userRepository.update(userId, updateData)

  if (!user) return null

  delete user.password
  return user
}

export async function remove(userId) {
  return await userRepository.remove(userId)
}
