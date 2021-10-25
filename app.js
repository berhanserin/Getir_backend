const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './config/main.env' })
const PORT = process.env.PORT
const mainRouter = require('./router/index')
const customHandler = require('./middlewares/errors/customErrorHandler')
const { connectDatabase } = require('./helpers/index')

const { DATABASE_URL, DB_NAME } = process.env

//* Middleware
app.use(express.json())

//* Router
app.use('/api', mainRouter)

//* Error Handler
app.use(customHandler)

connectDatabase(DATABASE_URL, DB_NAME)

app.listen(PORT, () => {
    console.log(`🚀 Server uçtu`)
})
