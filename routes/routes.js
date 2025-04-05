const collictionRoute = require("./colliction.route")
const ProdactRoute = require("./Prodact.Route")
const userRouter = require("./user.routes")
const writerRoute = require("./writer.route")

const Routes = [
    userRouter,
    ProdactRoute,
    writerRoute,
    collictionRoute,
]
module.exports = Routes