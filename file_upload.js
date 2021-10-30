const multer = require('multer')
const short = require('short-uuid')
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'files')
    },
    filename: function (req, file, callback) {
        callback(null, short.generate() + path.extname(file.originalname))
    },
})

var upload = multer({ storage: storage }).array('image',99999)

function uploadAsync(req, res) {
    return new Promise(function (resolve, reject) {
        upload(req, res, function (err) {
            if (err !== undefined) return reject(err)
            resolve(req.files)
        })
    })
}

module.exports = uploadAsync
