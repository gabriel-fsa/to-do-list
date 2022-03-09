const path = require('path')
const express = require('express')
require('dotenv').config()

const app = express()
const publicPath = path.join(__dirname, 'build')
app.use(express.static(publicPath))

app.listen(process.env.PORT || 3000, (err) => {
  if (err) return console.error(err)
  console.log(`Server is running on ${process.env.PORT}`)
})
