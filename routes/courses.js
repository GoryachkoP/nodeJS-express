const { Router }  = require('express')
const Course = require('../model/course')
const router = Router()

router.get('/', async (req, res) => {
  const courses = await Course.getAll()

  res.render('courses', {
    title: 'Курси',
    isCourses: true,
    courses
  })
})

router.get('/:id/edit', async (req, res) => {
  if (!req.query.allow) {
    return res.redirect('/')
  }

  const course = await Course.getById(req.params.id)

  res.render('course-edit', {
    title: `Edit ${course.title}`,
    course
  })
})

router.post('/edit', async (req, res) => {
  await Course.update(req.body)
  res.redirect('/courses')
})

router.get('/:id', async (req, res) => {
  const course = await Course.getById(req.params.id)
  
  res.render('course', {
    title: `Курс ${course.title}`,
    course,
    layout: 'empty'
  })
})

module.exports = router