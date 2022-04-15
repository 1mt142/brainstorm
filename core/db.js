const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const server = process.env.SERVER; // REPLACE WITH YOUR OWN SERVER
const database = process.env.DATABASE;          // REPLACE WITH YOUR OWN DB NAME

mongoose.Promise = Promise

mongoose.connection.on('connected', () => {
  console.log('Connection Established')
})

// mongoose.connection.on('reconnected', () => {
//   console.log('Connection Reestablished')
// })

mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected')
})

mongoose.connection.on('close', () => {
  console.log('Connection Closed')
})

mongoose.connection.on('error', (error) => {
  console.log('ERROR: ' + error)
})

const run = async () => {
  await mongoose.connect(`mongodb+srv://${server}/${database}`, {
    // autoReconnect: true,
    // reconnectTries: 1000000,
    // reconnectInterval: 3000
  })
}

run().catch(error => console.error(error))