import express from 'express'
import * as orderController from '../controllers/orderController.js'

const router = express.Router()

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: List all orders
 *     responses:
 *       200:
 *         description: Returns all orders
 */
router.get('/', orderController.list)

/**
 * @swagger
 * /orders/{orderId}:
 *   get:
 *     summary: Get an order by ID
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: Order identifier
 *     responses:
 *       200:
 *         description: Order found
 *       404:
 *         description: Order not found
 */
router.get('/:orderId', orderController.get)

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *               valorTotal:
 *                 type: number
 *               dataCriacao:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idItem:
 *                       type: number
 *                     quantidadeItem:
 *                       type: number
 *                     valorItem:
 *                       type: number
 *     responses:
 *       201:
 *         description: Order created
 */
router.post('/', orderController.create)

/**
 * @swagger
 * /orders/{orderId}:
 *   put:
 *     summary: Update an existing order
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: Order identifier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               valorTotal:
 *                 type: number
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idItem:
 *                       type: number
 *                     quantidadeItem:
 *                       type: number
 *                     valorItem:
 *                       type: number
 *     responses:
 *       200:
 *         description: Order updated
 *       404:
 *         description: Order not found
 */
router.put('/:orderId', orderController.update)

/**
 * @swagger
 * /orders/{orderId}:
 *   delete:
 *     summary: Delete an order
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: Order identifier
 *     responses:
 *       204:
 *         description: Order deleted
 *       404:
 *         description: Order not found
 */
router.delete('/:orderId', orderController.remove)

export default router