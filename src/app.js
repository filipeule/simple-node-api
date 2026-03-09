import express from 'express'
import orderRouter from './routers/orderRouter.js'
import pino from "pino-http"
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./docs/swagger.js"

const app = express()

app.use(pino())
app.use(express.json())

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/orders', orderRouter)

export default app