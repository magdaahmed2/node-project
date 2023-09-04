import userModel from "../../db/models/user.model.js";

import bcrypt from "bcrypt";
import sendEmail from "../../utils/sendEmail.js";





const signUp = async (req, res) => {
    let { name, email, password } = req.body;
      let foundedUser = await userModel.findOne({ email });
      if (foundedUser) {
        res.json({ message: "Already register " });
      } else {
        let hashedPassword = bcrypt.hashSync(password, 7);
        let addedUser = await userModel.insertMany({ name, email, password: hashedPassword });
        //   TODO: send verify email
        sendEmail({ email, id: addedUser[0]._id });
        res.json({ message: "welcome", addedUser });
      }
    
};


const signIn = async (req, res) => {
    let { email, password } = req.body;
        let foundedUser = await userModel.findOne({ email });
        if (foundedUser) {
            if (foundedUser.isVerified) {
                let matchedPassword = bcrypt.compareSync(password, foundedUser.password);
                if (matchedPassword) {
                    res.json({ message: "Welcome on board" });
                } else {
                    res.json({ message: "wrong password" });
                }
            } else {
                res.json({ message: "please verify ur account first" });
            }
  
        } else {
            res.json({ message: "u need to register first" });
        }

};

const verifyAccount = async (req, res) => {
    let { id } = req.params;
    let foundedUser = await userModel.findById(id)
    if (foundedUser) {
        let updatedUser = await userModel.findByIdAndUpdate(id, { isVerified: true }, { new: true });
        res.json({ message: "Updated", updatedUser })
    } else {
        res.json({ message: "invalid id" });
    }
}
export { signUp, signIn, verifyAccount };










// asdasdasdasdasd@gmail.com