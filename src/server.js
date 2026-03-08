import pino from 'pino'
import app from './app.js'
import { connect } from './database/mongo.js'

const logger = pino()

const PORT = process.env.PORT || 3000

let server

async function startServer() {
  try {
    await connect()
  } catch (error) {
    logger.error(`error connecting to database: ${error}`)
    return
  }

  server = app.listen(PORT, () => {
    logger.info(`orders api listening on port ${PORT}`)
  })
}

startServer()

async function shutdown(signal) {
  logger.info(`received ${signal}, shutting down...`)

  server.close(() => {
    logger.info("http server closed")
    process.exit(0)
  })
}

process.on("SIGINT", shutdown)
process.on("SIGTERM", shutdown)