const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res, next) => {
  // res status 200 по дефолту в express
  // res.status(200)
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})









const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server is running on port ${port}'`);
})