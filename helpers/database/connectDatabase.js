const mongoose = require('mongoose')

const connectDatabase = (Db_url, Db_name) => {
    mongoose
        .connect(`${Db_url}/${Db_name}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(() => {
            console.log(`Veri Tabanına bağlanıldı.`)
        })
        .catch((hata) => {
            console.log(`${hata}`)
        })
}

module.exports = connectDatabase
