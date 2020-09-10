const express = require('express')
const router = express.Router()

const restaurantData = require('../../models/restaurant')

router.get('/', (req, res) => {
  restaurantData.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.error(error))
})

module.exports = router