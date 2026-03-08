import express from 'express'
import orderRouter from './routers/orderRouter.js'
import pino from "pino-http"

const app = express()

app.use(pino())
app.use(express.json())

app.use('/orders', orderRouter)

export default app