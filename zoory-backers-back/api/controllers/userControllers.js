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

//start post a new user
const createUser= async (req,res)=>{
    const user=req.body;
    const query={email:user.email}

    try {
        const existingUser =await User.findOne(query);
        if (existingUser){
            return res.status(302).json({message:"User Already Exists"});
        }
        const result=await User.create(user);
        res.status(200).json(result);

    }catch (error){
        res.status(500).json({message:error.message});
    }
};
//end post a New user


//start a delete a user
const deleteUser=async (req,res)=>{
const userId =req.params.id;

try {
const deletedUser=await User.findByIdAndDelete(userId);
//if user not found
    if (!deletedUser){
        return res.status(404).json({message:"User Not Found"});
    }
    res.status(200).json({message:"User deleted successfully"});
}catch (error){
    res.status(500).json({message:error.message});
}
};
//end a delete user

module.exports={
    getAllUsers,
    createUser,
    deleteUser
}