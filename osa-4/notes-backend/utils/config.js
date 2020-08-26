require('dotenv').config()

let PORT = process.env.PORT
console.log(PORT)
let MONGODB_URI = process.env.MONGODB_URI
console.log(MONGODB_URI)

module.exports = {
  MONGODB_URI,
  PORT
}