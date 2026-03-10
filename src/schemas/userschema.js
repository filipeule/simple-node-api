import { z } from 'zod'

export const userSchema = z.object({
  username: z.string().min(3, 'Username must have at least 3 characters'),
  password: z.string().min(8, 'Password must have at least 8 characters'),
})
