const { Router }  = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Курси',
    isCourses: true
  })
})

module.exports = router