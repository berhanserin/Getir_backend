const express = require('express')
const route = express.Router()
const { userController } = require('../controller/index')
const multer = require('multer')
const short = require('short-uuid')
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '../../file')
    },
    filename: function (req, file, callback) {
        callback(null, short.generate() + path.extname(file.originalname))
    },
})

var upload = multer({ storage: storage }).single('avatar')

route.route('/').post(userController.post)

route.route('/avatar').post(userController.setAvatar)

module.exports = route
