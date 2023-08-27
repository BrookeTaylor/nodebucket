/**
 *  Title: app.js
 *  Author: Professor Krasso
 *  Date: 8/27/2023
 *  Description: server app
 */
'use strict'

// Require statements
const express = require('express')

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const createServer = require('http-errors')
const path = require('path')

const employeeRoute = require('./routes/employee')

// Create the Express app
const app = express()


// Swagger setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nodebucket API',
      version: '1.0.0',
      description: '',
    },
  },
  apis: ['./swagger.js'],
};
const openapiSpecification  = swaggerJSDoc(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));



// Configure the app
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../dist/nodebucket')))
app.use('/', express.static(path.join(__dirname, '../dist/nodebucket')))

app.use('/api/employees', employeeRoute)

// error handler for 404 errors
app.use(function(req, res, next) {
  next(createServer(404)) // forward to error handler
})

// error handler for all other errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500) // set response status code

  // send response to client in JSON format with a message and stack trace
  res.json({
    type: 'error',
    status: err.status,
    message: err.message,
    stack: req.app.get('env') === 'development' ? err.stack : undefined
  })
})

module.exports = app // export the Express application