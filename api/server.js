const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const usersRouter = require('./users/users-router') 
const plantsRouter = require('./plants/plants-router')
const {restricted} = require('./plants/plants_middleware')
const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

//add routers
server.use('/api/users', usersRouter)
server.use('/api/plants',restricted, plantsRouter)


server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server
