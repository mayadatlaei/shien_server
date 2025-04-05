const WRITER_MODEL = require("../models/writer.model")

const createwriter = async (req, res) => {
    const { name, image, booksCollaction } = req.body
    try {
        const writer = await WRITER_MODEL.create({
            name,
            image,
            booksCollaction,
        })
        res.status(200).json({
            success: true,
            data: writer,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

const findAllwriter = async (req, res) => {
    try {
        const writer = await WRITER_MODEL.find({})
        res.status(200).json({
            success: true,
            data: writer,
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
    findAllwriter,
    createwriter,
}