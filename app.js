const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Backend2'
const app = express();
const cors = require('cors');

app.use(cors());

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected.. to port 8000')
})

app.use(express.json())

const alien1Router = require('./routes/userData')
app.use('/userData', alien1Router)

app.listen(8000, () => {
    console.log('Server started')
})