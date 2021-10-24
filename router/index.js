const express = require('express')
const route = express.Router()
const users = require('./users')

route.use('/users', users)

module.exports = route
