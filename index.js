const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})









const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server is running on port ${port}'`);
})