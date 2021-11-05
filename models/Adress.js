const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema

const { Number, String } = Schema.Types

const AdressSchema = new Schema(
    {
        _id: { type: Number },
        long: { type: String },
        leng: { type: String },
        adressType: { type: String, enum: ['home', 'work'] },
        userid: { type: Number },
    },
    { collection: 'Adresler', timestamps: true }
)

const validate = (users) => {
    const schema = Joi.object({
        long: Joi.string().min(3).max(50).trim().required(),
        leng: Joi.string().min(3).max(50).trim().required(),
        adressType: Joi.string().min(3).max(50).trim().required(),
        userid: Joi.string().trim().email().required(),
    })

    return schema.validate(users)
}

AdressSchema.pre('save', function (next) {
    if (this.isNew) {
        this.constructor.find({}).then((result) => {
            this._id = result.length
            next()
        })
    }
})

var Adress = mongoose.model('Adress', AdressSchema)

module.exports = { Adress, validate }
