const USER_MODEL = require("../models/user.models")

const createUser = async (req, res) => {
    const { userName, email, phone, password } = req.body
    try {
        const user = await USER_MODEL.create({
            userName: userName,
            email: email,
            phone: phone,
            password: password
        })
        console.log("data", user);

        res.status(200).json({
            success: true,
            message: "user created",
            data: user,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }


}

const findUser = async (req, res) => {
    const { userName, } = req.body
    try {
        const users = await USER_MODEL.find({
            userName: userName,
        })
        res.status(200).json({
            success: true,
            message: "user created",
            data: users,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.massage
        })
    }
}


const deleteUser = async (req, res) => {
    const { phone, } = req.body
    try {
        const user = await USER_MODEL.deleteOne({
            phone: phone
        })
        res.status(200).json({
            success: true,
            massage: "user delete",
            data: user,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

const LogIn = async (req, res) => {
    const { phone, password } = req.body
    console.log("phone", phone);
    console.log("password", password);
    
    if (!phone || !password) {
        return res.status(403).json({ success: false, message: "missing required inputs!" })
    }

    try {
        const users = await USER_MODEL.findOne({
            phone,
            password
        })

        if (!users) {
            return res.status(401).json({ success: false, message: "unAthoraized" })
        }

        res.status(200).json({
            success: users ? true : false,
            data: users,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.massage
        })
    }
    
}

const UpdetUser = async (req, res) => {
    const { phone, password } = req.body
    try {
        const users = await USER_MODEL.findOneAndUpdate({
            phone, password,
        }, {
            userName, phone, email, password
        })
        res.status(200).json({
            success: true,
            message: "log in success",
            data: users,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.massage
        })
    }
}

module.exports = {
    createUser,
    findUser,
    deleteUser,
    LogIn,
    UpdetUser,
}
