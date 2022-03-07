const express = require('express')
const { resolve } = require('path')
require('dotenv').config()
const app = express()

app.use('/', express.static(resolve(__dirname, './build')))

const port = process.env.PORT

app.listen(port || 3000, (err) => {
  if (err) return console.error(err)
  console.log(`Server is running on ${port}`)
})
