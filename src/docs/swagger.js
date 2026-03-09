import swaggerJsdoc from "swagger-jsdoc"

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Orders API",
      version: "1.0.0",
      description: "Simple orders API"
    }
  },
  apis: ["./src/routers/*.js"]
}

const swaggerSpec = swaggerJsdoc(options)

export default swaggerSpec