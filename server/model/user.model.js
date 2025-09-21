import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:True
    },
    password:{
        type:String,
        required:True
    }
})
const User = new mongoose.model("User",userSchema);
export default User;
