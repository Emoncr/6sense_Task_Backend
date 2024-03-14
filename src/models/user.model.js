import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
            type: String,
          },
        email: {
          type: String,
          required: true,
          unique: true,
          lowecase: true,
        },
        phone: {
          type: String,
          required: true,
        },
        status:{
            type: String,
            enum:["active","blocked"],
            default: "active"
        }
})

const User = new mongoose.model("User", userSchema);

export default User