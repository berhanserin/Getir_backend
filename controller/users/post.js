const asyncHandler = require('express-async-handler')
const { User, validate } = require('../../models/User')
const response = require('../../helpers/response/response')

const post = asyncHandler(async (req, res) => {
    const { error } = validate(req.body)
    if (error)
        return new response(null, 'Doğru Dataları Yollamadınız.').error500(res)

    
})

module.exports = post
