const PRODACT_MODEL = require("../models/proudct.model")

const createProdact = async (req, res) => {
    const { name, price, image , about} = req.body
    try {
        const prodact = await PRODACT_MODEL.create({
            name: name,
            price,
            image,
            about
        })
        res.status(200).json({
            success: true,
            data: prodact,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

const findprodact = async (req, res) => {
    const { name, } = req.body
    const search = {}
    name && (search.name = name)
    try {
        const prodacts = await PRODACT_MODEL.find(search)
        res.status(200).json({
            success: true,
            data: prodacts,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.massage
        })
    }
}


const deleteprodact = async (req, res) => {
    const { phone, } = req.body
    try {
        const prodact = await PRODACT_MODEL.deleteOne({
            phone: phone
        })
        res.status(200).json({
            success: true,
            massage: "prodact delete",
            data: prodact,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = {
    createProdact,
    findprodact,
    deleteprodact
}
