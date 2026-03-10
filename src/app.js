import express from 'express'
import pino from "pino-http"
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./docs/swagger.js"

import orderRouter from './routers/orderRouter.js'
import userRouter from './routers/userRouter.js'
import authRouter from './routers/authRouter.js'
import { authMiddleware } from './middleware/authMiddleware.js'

const app = express()

app.use(pino())
app.use(express.json())

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/orders', authMiddleware, orderRouter)
app.use('/users', userRouter)
app.use('/login', authRouter)

export default app