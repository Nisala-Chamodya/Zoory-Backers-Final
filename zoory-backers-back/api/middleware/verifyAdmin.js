/*
const jwt = require('jsonwebtoken');
const User=require('../model/User');
const verifyAdmin=async (req,res,next)=>{
    const email =req.decoded.email;
   // const email ="";

    const query = {email:email}

    const user= await User.findOne(query);
    const isAdmin =user?.role=='admin';
    console.log(isAdmin)

    if(!isAdmin){
        return res.status(403).send({message:"Forbidden Access"})
    }
    next();
}
module.exports=verifyAdmin;*/
const verifyAdmin = (req, res, next) => {
    if (!req.decoded || !req.decoded.email) {
        return res.status(403).send('No email found in token.');
    }

    const email = req.decoded.email;

    // Assume isAdmin is a function that checks admin status
    if (!isAdmin(email)) {
        return res.status(403).send('User is not an admin.');
    }

    next();
};

module.exports = verifyAdmin;
