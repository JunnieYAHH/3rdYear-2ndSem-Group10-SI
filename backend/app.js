const express = require('express')
const app = express();

const errorMiddleware = require('./middlewares/errors')

// Import all Routes
const user = require('./routes/user')


app.use('/api/v1', user);



// Middleware to handle errors
app.use(errorMiddleware);


module.exports = app