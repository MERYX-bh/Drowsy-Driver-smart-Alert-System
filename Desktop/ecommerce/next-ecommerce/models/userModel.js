import mongoose from "mongoose";
import {avatarImage} from "../images/avatar.png";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    root:{
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: avatarImage
    }
},
{
    timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset