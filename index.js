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
  res.render('index', {
    title: 'Головна сторінка',
    isHome: true
  })
})

app.get('/courses', (req, res) => {
  res.render('courses', {
    title: 'Курси',
    isCourses: true
  })
})

app.get('/add', (req, res) => {
  res.render('add', {
    title: 'Додати курс',
    isAdd: true
  })
})









const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server is running on port ${port}'`);
})