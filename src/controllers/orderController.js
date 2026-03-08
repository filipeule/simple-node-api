import e from 'express'
import * as orderService from '../services/orderService.js'

export async function list(req, res) {
  try {
    const orders = await orderService.list()

    return res.json(orders)
  } catch (error) {
    return res.status(500).json({
      error: `error listing all orders: ${error}`,
    })
  }
}

export async function get(req, res) {
  try {
    const { orderId } = req.params

    const order = await orderService.get(orderId)
    if (!order) {
      return res.status(404).json({
        error: `order with id ${orderId} not found`,
      })
    }

    return res.json(order)
  } catch (error) {
    return res.status(500).json({
      error: `error getting order: ${error}`,
    })
  }
}

export async function create(req, res) {
  try {
    const body = req.body

    const order = await orderService.create(body)

    return res.status(201).json(order)
  } catch (error) {
    return res.status(500).json({
      error: `error creating order: ${error}`,
    })
  }
}

export async function update(req, res) {
  try {
    const { orderId } = req.params
    const body = req.body

    const order = await orderService.update(orderId, body)

    if (!order) {
      return res.status(404).json({
        error: `order with id ${orderId} not found`,
      })
    }

    return res.json(order)
  } catch (error) {
    return res.status(500).json({
      error: `error updating order: ${error}`,
    })
  }
}

export async function remove(req, res) {
  try {
    const { orderId } = req.params

    await orderService.remove(orderId)

    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({
      error: `error deleting order: ${error}`,
    })
  }
}
