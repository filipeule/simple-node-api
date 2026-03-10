import pino from 'pino'
import { MongoClient } from 'mongodb'

const logger = pino()

const uri = process.env.MONGO_URI || 'mongodb://user:pass@localhost:27017'
const client = new MongoClient(uri)

let db

export async function connect() {
  await client.connect()
  db = client.db('ordersdb')

  await db.collection('orders').createIndex({ orderId: 1 }, { unique: true })
  await db.collection('users').createIndex({ username: 1 }, { unique: true })

  logger.info('connected to mongo database!')
}

export function getDb() {
  return db
}
