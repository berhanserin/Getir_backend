const express = require('express')
const route = express.Router()
const asyncHandler = require('express-async-handler')

route.get(asyncHandler(async (req, res) => {}))

module.exports = route
