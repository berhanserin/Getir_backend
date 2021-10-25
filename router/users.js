const express = require('express')
const route = express.Router()
const { userController } = require('../controller/index')

route.route('/').post(userController.adduser)

module.exports = route
