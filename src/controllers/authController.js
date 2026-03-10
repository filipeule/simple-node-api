import * as authService from '../services/authService.js'

export async function login(req, res) {
  const { username, password } = req.body

  try {
    const token = await authService.login(username, password)

    return res.status(201).json({ token })
  } catch (error) {
    return res.status(400).json({
      error: `error logging in: ${error}`
    })
  }
}
