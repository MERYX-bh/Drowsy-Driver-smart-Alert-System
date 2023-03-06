import connectDB from '../../../utils/connectDB'
import bcrypt from 'bcrypt'
import Users from '../../../models/userModel'
import {createAccessToken} from '../../../utils/generateToken'
import jwt from 'jsonwebtoken'

connectDB()

const accessToken = async (req, res) => {
   try{
    const rf_token = req.cookies.refreshtoken;
    if(!rf_token) return res.status(400).json({err: 'please login now !'})
    
    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
    if(!result) return res.status(400).json({err: 'Your token is incorrect or has expired'})

    const user = await Users.findById(result.id)
    if(!user) return res.status(400).json({err: 'This user does not excist'})

    const accessToken = createAccessToken({id:user._id})
    res.json({
        accessToken,
        user: {
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            root: user.root
        }
    })
}catch(err){
    return res.status(500).json({err: err.message})
   }
}
export default accessToken
