const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser")
const createBtn = "true"
const categoryList = []
const locationList = ['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市']

const restaurantData = require('../../models/restaurant')

router.get('/desc', (req, res) => {
  restaurantData.find()
    .lean()
    .sort({ _id: 'desc' })
    .then(restaurant => res.render('index', { restaurant, createBtn }))
    .catch(error => console.error(error))
})

router.get('/category', (req, res) => {
  restaurantData.find()
    .lean()
    .then(restaurant => {
      dataList = []
      restaurant.forEach(e => dataList.push(e.category))
      dataList.filter(e => !categoryList.includes(e) ? categoryList.push(e) : false)
      res.render('category', { categoryList })
    })
    .catch(error => console.error(error))
})

router.get('/category/:category', (req, res) => {
  const category = req.params.category
  restaurantData.find()
    .lean()
    .then(restaurant => {
      dataList = []
      restaurant.filter(e => e.category.includes(category) ? dataList.push(e) : false)
      res.render('category', { categoryList, dataList, category })
    })
    .catch(error => console.error(error))
})

router.get('/location', (req, res) => {
  res.render('location', { locationList })
})

router.get('/location/:location', (req, res) => {
  const location = req.params.location
  restaurantData.find()
    .lean()
    .then(restaurant => {
      dataList = []
      restaurant.filter(e => e.location.includes(location) ? dataList.push(e) : false)
      res.render('location', { locationList, dataList, location })
    })
    .catch(error => console.error(error))
})

module.exports = router 