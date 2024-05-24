const express = require('express')
const { product } = require("../database/products")
const router = express.Router()

router.get('/', (req, res) => {

    res.json({
        success: true,
        message: "Successfully!!!",
        data: product
    })
})
router.get('/:key', async (req, res) => {
    let data = product.find(
        {
            "$or": [
                {
                    name: { $regex: req.params.key },
                }
            ]
        }
    )

    res.json(data)
})


router.post('/', (req, res) => {
    const newProduct = {
        id: req.params.id,
        name: req.params.name,
        price: req.params.price,
        quantity: req.params.quantity,
        image: req.params.image,

    }
    product.push(newProduct)
    res.send({
        success: true,
        message: "Successfully!!!",
        data: req.body
    })
})


module.exports = router