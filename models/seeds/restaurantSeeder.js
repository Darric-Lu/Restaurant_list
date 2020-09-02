const mongoose = require('mongoose')
const addRestaurant = require('../restaurant')
const restaurantList = require('../../restaurant.json').results
const db = mongoose.connection

mongoose.connect('mongodb://localhost/restaurant-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

db.on('error', () => {
  console.log('mongoose error!')
})
db.once('open', () => {
  for (let i = 0; i < restaurantList.length; i++) {
    addRestaurant.create({ ...restaurantList[i] })
  }
  console.log('mongoose connected & done !!')
})
