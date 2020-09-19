require('dotenv').config()
const express = require('express')
const postRoutes = require('./routes/post')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const chalk = require('chalk')


//db connection:
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() =>{
  console.log(chalk.bold.rgb(255,20,147)('DB CONNECTED'))
}).catch(
  console.log(chalk.bold.rgb(248, 131, 121)("DB DID NOT CONNECT"))
)



// middleware
app.use(morgan('dev'))

app.use(bodyParser.json())

app.use(expressValidator())

app.use( '/', postRoutes )





// listener
const port = process.env.PORT || 8080
app.listen( port, () => {
  console.log(chalk.bold.rgb(10, 186, 181)(`listening on port ${ port }...`))
})
