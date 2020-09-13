const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser")

const restaurantData = require('../../models/restaurant')

router.get('/', (req, res) => {
  const keyword = req.query.keyword
  restaurantData.find()
    .lean()
    .then(restaurants => {
      const filterRestaurants = restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
          restaurant.category.toLowerCase().includes(keyword.toLowerCase())
      })
      res.render('index', { restaurant: filterRestaurants, keyword })
    })
    .catch(error => console.error(error))
})

module.exports = router 