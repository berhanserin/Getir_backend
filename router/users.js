const express = require('express')
const route = express.Router()
const { userController } = require('../controller/index')

route.route('/').post(userController.post)

route.route('/avatar').post(userController.setAvatar)

route.route('/login').post(userController.login)

module.exports = route
