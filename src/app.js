const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json({ limit: '50mb' }))

app.get('*', (req, res) => {
  res.status(404).send({
    message: 'Page not found'
  })
})

module.exports = app