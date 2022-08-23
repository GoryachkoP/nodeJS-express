const { Router }  = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Додати курс',
    isAdd: true
  })
})

module.exports = router