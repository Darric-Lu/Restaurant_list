const mongoose = require('mongoose')
const addRestaurant = require('../restaurant')
const restaurantList = require('../../restaurant.json').results
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 0; i < restaurantList.length; i++) {
    addRestaurant.create({ ...restaurantList[i] })
  }
  console.log('mongoose connected & done !!')
})
