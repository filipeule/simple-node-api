import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as userRepository from '../repositories/userRepositoryMongo.js'

export async function login(username, password) {
  const user = await userRepository.findByUsername(username)

  if (!user) {
    throw new Error('invalid credentials')
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    throw new Error('invalid credentials')
  }

  const token = jwt.sign({ userId: user._id.toString(), username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' })

  return token
}
