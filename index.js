const express = require('express')

const PORT = 3000

const app = express()

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/app.html')
})

app.use(express.static('public'))

app.listen(PORT, () => console.log('Server en puerto ' + PORT))