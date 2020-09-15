const express = require('express')
const { getPosts } = require('./routes/post')
const app = express()

app.get( '/', getPosts )

const port = 8080
app.listen( port, () => {
  console.log(`listening on port ${ port }...`)
})
