const express = require('express')
const fs = require('fs').promises
const $V = require('./public/scripts/View.js')

const app = express()
const port = 4200

app.use(express.static('public'))
app.use('/styles', express.static(__dirname + 'public/styles'))
app.use('/scripts', express.static(__dirname + 'public/scripts'))

app.get('', (_, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.info(`Started server at port: ${port}`)
})