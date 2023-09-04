


import express from 'express';
import { signIn, signUp, verifyAccount } from "./user.controller.js";
import validation from '../../middleware/validation.js';
import { signInSchema, signUpSchema } from "./user.validationSchema.js";

const userRoutes = express.Router()


userRoutes.post("/signUp",validation(signUpSchema),signUp)

userRoutes.post("/signIn", validation(signInSchema), signIn);

userRoutes.get("/verify/:id", verifyAccount)




userRoutes.post("/asda", (req, res) => {
    
}     )





export default userRoutes