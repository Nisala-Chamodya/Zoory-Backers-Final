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
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@zoory-backers-new-clust.arbgwe4.mongodb.net/?retryWrites=true&w=majority&appName=zoory-backers-new-cluster`
).
    then(
        console.log("Mongodb connected successfullly")
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



{/*start import routes here*/}
    const menuRoutes=require('./api/routes/menuRoutes');
    const cartRoutes=require('./api/routes/cartRoutes');
    const userRoutes=require('./api/routes/UserRoutes');

    app.use('/menu',menuRoutes);
    app.use('/carts',cartRoutes);
    app.use('/users',userRoutes);
{/*end import routes here*/}

app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})