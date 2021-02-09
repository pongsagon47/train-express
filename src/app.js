const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const helmet = require("helmet")
const cors = require('cors')

//security
app.use(helmet())

//cors
const whitelist = ['http://localhost:3080/']
const corsOptions = {
  origin: function(origin, callback) {
    if(whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

//bodyparser
app.use(bodyParser.json({ limit: '50mb' }))

app.get('*', (req, res) => {
  res.status(404).send({
    message: 'Page not found'
  })
})

module.exports = app