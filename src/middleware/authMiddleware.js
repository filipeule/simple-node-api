import jwt from 'jsonwebtoken'
import * as usersService from '../services/userService.js'

export async function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token)
    return res.status(401).send({
      error: 'unauthorized',
    })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await usersService.findById(decoded.userId)

    if (!user)
      return res.status(401).send({
        error: 'user not found',
      })

    req.user = user
    next()
  } catch {
    res.status(401).send({
      error: 'invalid token',
    })
  }
}
