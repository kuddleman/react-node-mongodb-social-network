exports.createPostValidator = ( req, res, next ) => {
  // checks for title:
  req.check('title', "Write a title").notEmpty()
  req.check('title', 'Title must be between 4 and 150 characters').isLength({
    min:4, 
    max: 150
  })

  // checks for body:
  req.check('body', "Write a post").notEmpty()
  req.check('body', 'body must be between 4 and 2000 charaters').isLength({
    min:4, 
    max: 2000
  })

  // check for errors
  const errors = req.validationErrors()

  // if there are errors, show the first one as they appear
  if (errors) {
    const firstError = errors.map(error => error.msg)[0]
    return res.status(400).json({ error: firstError })
  }
  // proceed to next middleware
  next()
}