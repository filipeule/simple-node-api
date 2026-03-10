import express from 'express'
import * as authController from '../controllers/authController.js'

const router = express.Router()

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login into the system
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User logged in
 *       400:
 *         description: Error logging in
 */
router.post('/', authController.login)

export default router