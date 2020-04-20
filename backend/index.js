require('./config/mongodb')

const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

app.db = db
app.mongoose = mongoose

consign()
    .include('./api/constants.js')
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validations.js')
    .then('./api')
    .then('./schedules')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})