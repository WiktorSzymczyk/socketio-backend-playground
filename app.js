const express = require('express')
const app = express()
const cors = require('cors')
const port = 7000
require('dotenv').config()
require('./db/client')

app.use(express.json())
app.use(cors('*'))

app.use('/blog', require('./routes/routes'))

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})