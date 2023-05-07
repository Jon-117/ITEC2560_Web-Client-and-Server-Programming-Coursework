
// index.js sets up the sequelize connection, make the studentModel available to the database, then packages it all into the
// module.exports = db line at the end. This gives other files the ability to connect to and manipulate the student
// database by importing this file.


let {Sequelize, DataTypes} = require('sequelize')

// set the environment variable to the development (which will be our default) if no environment variable is set
let env = process.env.NODE_ENV || 'development'

console.log('Using environment ' + env)

let configFile = require(__dirname + '/../config.json')
let config = configFile[env]

let password = process.env.DB_PASSWORD // undefined locally, unnecessary with sqlite
// necessary for Azure. Set env variable on Azure.
config.password = password

let db = {}

let sequelize = new Sequelize(config)

let studentModelCreate = require('./student') // function definition
let studentModel = studentModelCreate(sequelize, DataTypes)

// associate the name of the student model with the return value of the studentModelCreate function

// I really am having a hard time following this description found in vid 8  at timestamp 9:00 - 9:14
// (8. Vue/Express Student Sign In - Setting up models/index.js)

db[studentModel.name] = studentModel

db.sequelize = sequelize // sequelize configuration
db.Sequelize = Sequelize // Sequelize library

module.exports = db // export the db


// CJ  Suggested reading - more on module.exports https://stackify.com/node-js-module-exports/
