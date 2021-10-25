const asyncHandler = require('express-async-handler')
const { User, validate } = require('../../models/User')

const post = asyncHandler(async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(500).json({ error: error })

    var users = await User.create(req.body)
    if (users) return res.status(201).json({ succes: true, data: users })
})

module.exports = post
