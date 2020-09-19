const Post = require('../models/post')

exports.getPosts = ( req, res ) => {
  res.json({
    posts: [
      { title: 'First post' },
      { title: 'second post' }
    ]
  })
}

exports.createPost = ( req, res ) => {
  const post = new Post(req.body)
  console.log("CREATING POST:", req.body)
}
