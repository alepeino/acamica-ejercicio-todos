const express = require('express')
const apiController = require('./controllers/api')

const PORT = 3000

const app = express()

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/app.html')
})

app.use(express.static('public'))

app.use('/api', apiController)

app.listen(PORT, () => console.log('Server en puerto ' + PORT))
