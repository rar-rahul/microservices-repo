const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = async (req,res) => {
   const {name,email,password} = req.body
    
   try {
    const userExist = await User.findOne({email:email})
    if(userExist){
       return  res.status(409).json({
            "message":"User Already Exist",
        })
    }

    const hashPassword = await bcrypt.hash(password,10)

    //process with user regikstration if not found
    const newUser = new User({name:name,email:email,password:hashPassword})
    await newUser.save()

    //sign jwt and genrate token
    const token = jwt.sign({ id: newUser._id }, process.env.SECRETPASS, { expiresIn: '1h' });


    return res.status(201).json({
        "user":newUser,
        "token":token,
        "message":"User registration successfyully"
    })
    
   } catch (error) {
    return res.status(500).json({
        "error":error.message,
        "message":"Error registrering the user"
    })
   }
   
}

const login = async (req,res) => {
    const {email,password} = req.body

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                "message": "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                "message": "Invalid credentials"
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRETPASS, { expiresIn: '1h' });

        return res.status(200).json({
            "token": token,
            "message": "Login successful"
        });
    } catch (error) {
        return res.status(500).json({
            "error":error.message,
            "message":"Error registrering the user"
        }) 
    }

        
}

module.exports = {register,login}