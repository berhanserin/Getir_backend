const asyncHandler = require('express-async-handler')
const { User, validate } = require('../../models/User')
const fileupload = require('../../file_upload')

const post = asyncHandler(async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(500).json({ error: error })
    var users = await User.create(req.body)
    if (users) return res.status(201).json({ succes: true, data: users })
})

const setAvatar = asyncHandler(async (req, res) => {
    var resp = await fileupload(req, res)
    console.log(resp[0].filename)
    return res.json({ status: true })
})

module.exports = { post, setAvatar }
