const { Router } = require('express')
const Course = require('../model/course')
const router = Router()

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Додати курс',
    isAdd: true
  })
})

router.post('/', async (req, res) => {
  const course = new Course(req.body.title, req.body.price, req.body.image)

  await course.save()

  res.redirect('/courses')
})

module.exports = router