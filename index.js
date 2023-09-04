 import express from 'express'
import connection from './db/connection.js'
const app = express()
/*
const jwt=require ('jsonwebtoken')
const jwt_SECRET="This is sonwebtoken secret from ny app"
app.get("/" ,( req,res,next) => {
   let token= jwt.sign({
        name:"magda",
        age:23
    },
jwt_SECRET,
{
    expiresIn:'1h'
}
    )
    res.json({
        token:token
      })


});
*/
const port = 7000
connection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 
