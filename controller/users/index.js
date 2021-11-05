const { post, setAvatar } = require('./post')
const asyncHandler = require('express-async-handler')
const { User } = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

const login = asyncHandler(async (req, res) => {
    const { userName, sifre } = req.body
    const user = await User.findOne({ userName }).then((find) => {
        console.log(find)

        const { JWT_COOKIE, NODE_ENV, JWT_Secret_Key, JWT_EXPIRE } = process.env
        const { userName, _id, email } = find
        const payload = { _id, name: userName }

        if (bcrypt.compareSync(sifre, find.sifre)) {
            const token = jwt.sign(payload, JWT_Secret_Key, {
                expiresIn: JWT_EXPIRE,
            })
            return res
                .status(200)
                .cookie('access_token', token, {
                    httpOnly: true,
                    expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000),
                    secure: NODE_ENV === 'development' ? false : true,
                })
                .json({
                    success: true,
                    access_token: token,
                    data: { userName: userName, email },
                })
        }
        return res.status(401).json({
            success: false,
            errors: 'User Null',
        })
    })
})

module.exports = { post, setAvatar, login }
