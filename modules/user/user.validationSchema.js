
import Joi from "joi";



const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^[A-Z][a-z]{3,8}$/),
});


const signUpSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^[A-Z][a-z]{3,8}$/),
  age: Joi.number().min(10).max(30),

});


export {
    signInSchema,
    signUpSchema
}