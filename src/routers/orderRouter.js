import express from 'express'
import * as orderController from '../controllers/orderController.js'

const router = express.Router()

router.get('/', orderController.list)
router.get('/:orderId', orderController.get)
router.post('/', orderController.create)
router.put('/:orderId', orderController.update)
router.delete('/:orderId', orderController.remove)

export default router