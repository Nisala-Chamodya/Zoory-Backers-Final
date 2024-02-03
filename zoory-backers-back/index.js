const express = require('express')
const app = express();
const cors=require('cors')
const port = process.env.PORT || 6001
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config()



{/*start middleware*/}
    app.use(cors());
    app.use(express.json())
{/*end middleware*/}

{/*start mongodb config using mongoose*/}
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@zoory-backers-client.18dvqa2.mongodb.net/zoory-backers-database?retryWrites=true&w=majority`
).
    then(
        console.log("Mongodb connected successfully")
).catch((error) => console.log("Error Connecting to the Mongo DB",error));

{/*end mongodb config using mongoose*/}


{/*start jwt authentication*/}
app.post('/jwt',async (req,res)=>{
    const user=req.body;
    const token=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:'1hr'
    })
    res.send({token});
})
{/*end jwt authentication*/}

{/*start verification jwt token*/}
//middleware
const verifyToken =(req,res,next)=>{
  //  console.log(req.headers.authorization);
    if (!req.headers.authorization){
        return res.status(401).send({message:"unauthorized access"});
    }
    const token=req.headers.authorization.split(' ')[1];
  //  console.log(token)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
        if (err){
            return res.status(401).send({message:"Token is invalid"});
        }
        req.decoded=decoded;
        next()
    })
}

{/*end verification jwt token*/}

{/*start import routes here*/}
    const menuRoutes=require('./api/routes/menuRoutes');
    const cartRoutes=require('./api/routes/cartRoutes');
    const userRoutes=require('./api/routes/UserRoutes');

    app.use('/menu',menuRoutes);
    app.use('/carts',cartRoutes);
    app.use('/users',userRoutes);
{/*end import routes here*/}

app.get('/',verifyToken,(req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})