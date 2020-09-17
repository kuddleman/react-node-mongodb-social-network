require('dotenv').config()
const express = require('express')
const postRoutes = require('./routes/post')
const app = express()
const morgan = require('morgan')


//db connection:
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() =>{
  console.log('DB CONNECTED')
}).catch(
  console.log("DB DID NOT CONNECT")
)



// middleware
app.use(morgan('dev'))

app.use( '/', postRoutes )



// listener
const port = process.env.PORT || 8080
app.listen( port, () => {
  console.log(`listening on port ${ port }...`)
})
