const User=require("../model/User")

//start get all users


const getAllUsers =async (req, res)=>{

    try {
        const users=await User.find({});
        res.status(200).json(users)

    }catch (error){
        res.status(500).json({message:error.message})
    }
}
//end get all users

module.exports={
    getAllUsers
}