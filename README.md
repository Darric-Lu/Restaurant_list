# Restaurant List v3.0
A simple web application to record restaurant of list

## Features
- search restaurants by name
- search restaurants by category
- read the details of each restaurant
- create the details of restaurant
- edit the details of restaurant
- delete the details of restaurant
- sort the restaurants by order
- sort the restaurants by reverse order
- sort the restaurants by category
- sort the restaurants by location
- prompt for delete restaurant
- prompt for create restaurant
- prompt for edit restaurant

### Details
Click restaurant card to see details
- restaurant name
- the picture of restaurant 
- the phone of restaurant
- the category
- the location 
- the rating
- description of restaurant

### Searching
 name and category of the restaurants in search bar


## Environment SetUp
1. [Node.js](https://nodejs.org/download/release/v10.15.0/)10.15.0
2. [Express](https://expressjs.com/en/starter/installing.html) 4.17.1
3. [express-handlebars](https://www.npmjs.com/package/express-handlebars) 5.1.0
4. [mongoose](https://mongoosejs.com/) 5.10.2
5. [nodemon](https://nodemon.io/) 2.0.4
6. [body-parser](https://www.npmjs.com/package/body-parser) 1.19.0
7. [method-override](https://www.npmjs.com/package/method-override) 3.0.0

## Installation and Execution
1. Clone this git to local
```
[~] λ git clone https://github.com/Darric-Lu/Restaurant_list.git
```

2. Open MongoDB in terminal
```
[~] λcd ~/[YOUR PATH]/mongodb/bin/
[~] λ ./mongod --dbpath ~/[YOUR PATH]/mongodb-data
```

3. Get into the directory
```
[~] λ cd Restaurant_list
```
 
4. Install packages
```
[~/Restaurant_list] λ npm Install
```

5. Run the seed
```
[~/Restaurant_list] λ npm run seed
```

6. Run Web app
```
[~/Restaurant_list] λ npm run dev
```
