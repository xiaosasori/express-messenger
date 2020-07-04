const express = require('express')
const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', (req, res) => {

})

app.listen(port, hostname, () => {
  console.log('Running')
})