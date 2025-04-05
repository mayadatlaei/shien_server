const COLLICTOIN_MODEL = require("../models/collictoin.model");

const createcolliction = async (req, res) => {
    const { name, image, ganres, about } = req.body
    try {
        const colliction = await COLLICTOIN_MODEL.create({
            name,
            image,
            ganres,
            about,
        })
        res.status(200).json({
            success: true,
            data: colliction,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

const findAllcollictin = async (req, res) => {
    try {
        const colliction = await COLLICTOIN_MODEL.find({})
        res.status(200).json({
            success: true,
            data: colliction,
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
    findAllcollictin,
    createcolliction
}