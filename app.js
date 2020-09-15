const express = require('express')
const postRoutes = require('./routes/post')
const app = express()
const morgan = require('morgan')

// middleware
app.use(morgan('dev'))

app.use( '/', postRoutes )



// listener
const port = 8080
app.listen( port, () => {
  console.log(`listening on port ${ port }...`)
})
