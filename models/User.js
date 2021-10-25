const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema

const { Number, String } = Schema.Types

const UserSchema = new Schema(
    {
        _id: { type: Number },
        isim: {
            type: String,
            require: true,
            trim: true,
            maxlength: 50,
            minlength: 3,
        },
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        sifre: { type: String, required: true, trim: true },
    },
    { collection: 'Kullanıcılar', timestamps: true }
)

const validate = (users) => {
    const schema = Joi.object({
        isim: Joi.string().min(3).max(50).trim().required(),
        userName: Joi.string().min(3).max(50).trim().required(),
        sifre: Joi.string().trim().required(),
        email: Joi.string().trim().email().required(),
    })

    return schema.validate(users)
}

UserSchema.pre('save', function (next) {
    if (this.isNew) {
        this.constructor.find({}).then((result) => {
            this._id = result.length
            next()
        })
    }
})
var User = mongoose.model('Users', UserSchema)
module.exports = { User, validate }
