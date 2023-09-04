import { error } from 'console';
import mongoose from 'mongoose';
function connection(){
    mongoose.connect("mongodb://127.0.0.1:27017/nodedb")
    .then(()=> console.log("DB connected"))
    .catch((err)=>console.log(`db error =>${err}`))
}
export  default connection;