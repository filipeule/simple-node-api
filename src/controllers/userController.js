import * as userService from '../services/userService.js'
import * as z from 'zod'
import { userSchema } from '../schemas/userschema.js'

export async function create(req, res) {
  try {
    const body = req.body

    const result = userSchema.safeParse(body)
    if (!result.success) {
      return res.status(400).json({
        error: 'invalid request payload',
        details: z.treeifyError(result.error),
      })
    }

    const user = await userService.create(result.data)

    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json({
      error: `error creating order: ${error}`,
    })
  }
}

export async function update(req, res) {
  try {
    const body = req.body

    const result = userSchema.safeParse(body)
    if (!result.success) {
      return res.status(400).json({
        error: 'invalid request payload',
        details: z.treeifyError(result.error),
      })
    }

    const user = await userService.update(req.user._id, result.data)

    if (!user) {
      return res.status(404).json({
        error: 'user not found',
      })
    }

    return res.json(user)
  } catch (error) {
    return res.status(500).json({
      error: `error updating user: ${error}`,
    })
  }
}

export async function remove(req, res) {
  try {
    const { _id } = req.user

    await userService.remove(_id)

    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({
      error: `error deleting user: ${error}`,
    })
  }
}
