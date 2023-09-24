import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema =  new mongoose.Schema({
    name : {
        type :String,
        required : true 
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
}, {
    timestamps : true  // to get updated at
});

//hash password
userSchema.pre('save',async function (next) { 
    if(!this.isModified('password')) { //if modified don't do aything
        next();
    }

    const salt = await bcrypt.genSalt(10); // 10 rounds
    this.password = await bcrypt.hash(this.password, salt);
});

//check hash password!
userSchema.methods.matchPassword = async function (enteredPassword) {  
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = new mongoose.model('User',userSchema);

export default User; // imported to userController.js