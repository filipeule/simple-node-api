import { ObjectId } from "mongodb"
import * as orderRepository from '../repositories/orderRepositoryMongo.js'

export async function list() {
  return await orderRepository.findAll()
}

export async function get(orderId) {
  return await orderRepository.findById(orderId)
}

export async function create(data) {
  const order = {
    orderId: data.numeroPedido,
    value: data.valorTotal,
    creationDate: new Date(data.dataCriacao),
    items: data.items.map((i) => ({
      _id: new ObjectId(),
      productId: i.idItem,
      quantity: i.quantidadeItem,
      price: i.valorItem,
    })),
  }

  return await orderRepository.create(order)
}

export async function update(orderId, data) {
  const order = {
    orderId: orderId,
    value: data.valorTotal,
    items: data.items.map((i) => ({
      _id: new ObjectId(),
      productId: i.idItem,
      quantity: i.quantidadeItem,
      price: i.valorItem,
    })),
  }

  return await orderRepository.update(order)
}

export async function remove(orderId) {
  return await orderRepository.remove(orderId)
}