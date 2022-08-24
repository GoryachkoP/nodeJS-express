const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require('path')

class Course {
  constructor (title, price, image) {
    this.title = title
    this.price = price
    this.image = image
    this.id = uuidv4()
  }

  async save () {
    const courses = await Course.getAll()

    courses.push(this.toObject())
    
    return new Promise ((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'courses.json'),
        JSON.stringify(courses),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })
  }

  toObject () {
    return {
      title: this.title,
      price: this.price,
      image: this.image,
      id: this.id
    }
  }

  static getAll () {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'courses.json'),
        'utf-8',
        (err, content) => {
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(content))
          }  
        }
      )
    })
  }
}

module.exports = Course