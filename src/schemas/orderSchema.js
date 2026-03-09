import { z } from "zod"

export const createOrderSchema = z.object({
  numeroPedido: z.string(),
  valorTotal: z.number(),
  dataCriacao: z.coerce.date(),
  items: z.array(
    z.object({
      idItem: z.string(),
      quantidadeItem: z.number(),
      valorItem: z.number()
    })
  )
})

export const updateOrderSchema = z.object({
  valorTotal: z.number(),
  items: z.array(
    z.object({
      idItem: z.string(),
      quantidadeItem: z.number(),
      valorItem: z.number()
    })
  )
})