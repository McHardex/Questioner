import Joi from 'joi';

import validate from './validateInput';

const loginValidation = (req, res, next) => {
  const data = req.body;

  const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  });

  Joi.validate(data, schema, (err) => {
    validate(err, res, next);
  });
};

export default loginValidation;
