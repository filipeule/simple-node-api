import { getDb } from '../database/mongo.js'

export async function findAll() {
  const db = getDb()
  return db.collection("orders").find().toArray()
}

export async function findById(orderId) {
  const db = getDb()

  return db.collection("orders").findOne({
    orderId: orderId
  })
}

export async function create(order) {
  const db = getDb()

  await db.collection("orders").insertOne(order)

  return order
}

export async function update(order) {
  const db = getDb()

  const result = await db.collection("orders").findOneAndUpdate(
    { orderId: order.orderId },
    { $set: order },
    { returnDocument: "after" }
  )

  return result
}

export async function remove(orderId) {
  const db = getDb()

  return db.collection("orders").deleteOne({
    orderId: orderId
  })
}