const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');

//Pag handle ng mga uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to uncaught exceptions');
    process.exit(1)

})

//Connecting to database
connectDatabase();


//Setting up config file
dotenv.config({path: 'backend/config/config.env'})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})

//This is where we handle the unhandled promises in the config

process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to unhandled rejection');

    server.close(() => {
        process.exit(1)
    })
})