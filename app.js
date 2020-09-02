const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const db = mongoose.connection
const port = 3000
const restaurants = require('./restaurant.json')
const restaurantData = require('./models/restaurant')

mongoose.connect('mongodb://localhost/restaurant-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

db.on('error', () => {
  console.log('mongoose error!')
})
db.once('open', () => {
  console.log('mongoose connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  restaurantData.find()
    .lean()
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.error(error))
})

app.get('/restaurants/new', (req, res) => {
  res.render('new')
})

app.post('/restaurants', (req, res) => {
  return restaurantData.create({ ...req.body })
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

app.get('/restaurants/:id', (req, res) => {
  // console.log('req.params.id?', req.params.id)
  const restaurant = restaurants.results.find(e => e.id.toString() === req.params.id)
  res.render('show', { restaurant: restaurant })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const filterRestaurant = restaurants.results.filter(item => {
    return item.name.toLowerCase().includes(keyword.toLowerCase()) || item.category.toLowerCase().includes(keyword.toLowerCase())
  })
  // console.log('搜尋', filterRestaurant)
  res.render('index', { restaurant: filterRestaurant, keyword: keyword })
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})