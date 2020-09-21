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

exports.userSignupValidator = ( req, res, next ) => {
  // name is not null and between 4-10 characters
  req.check( "name", "Name is required" ).notEmpty();

  // email is not null, valid and normalized
  req.check( "email", "Email must be between 3 to 32 characters" )
  .matches(/.+\@.+\..+/)
  .withmessage("Email must contain @")
  .isLength({
    min: 4,
    max: 2000
  })

  // check for password
  req.check("password", "Password is required").notEmpty()
  req.check("password")
  .islength({min: 6})
  .withMessage("Password must contain at least 6 characters")
  .matches( /\d/ )
  .withMessage("Must contain a number")

  // check for errors
  if (errors) {
    const firstError = errors.map(error => error.msg)[0]
    return res.status(400).json({ error: firstError })
  }
  // proceed to next middleware
  next()

}