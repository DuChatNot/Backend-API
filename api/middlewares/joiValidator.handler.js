const boom = require('@hapi/boom');

function validatorHandler (schema, prop){ 
  return (req, res, next) => { // Closure
    const data = req[prop]; // req.body / req.params / req.query
    const {error} = schema.validate(data);
    if (error){
      next(boom.badRequest(error));
    } else {
      next();
    }
  }
}

module.exports = validatorHandler;
