const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './config/main.env' })
const PORT = process.env.PORT
const mainRouter = require('./router/index')
const customHandler = require('./middlewares/errors/customErrorHandler')

//* Middleware
app.use(express.json())

//* Router
app.use('/api', mainRouter)

//* Error Handler
app.use(customErrorHandler)

app.listen(PORT, () => {
    console.log(`🚀 Server uçtu`)
})
