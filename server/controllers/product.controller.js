const Product = require('../models/product.model');
const { validateProduct } = require('../validation/product.validation')

module.exports.getProducts = (req, res) => {
    Product.find()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

module.exports.createProduct = (req, res) => {
    const { errors, valid } = validateProduct(req.body)

    try {
        if (!valid) {
            res.status(200).json(errors)
        } else {
            Product.create(req.body)

                .then(product => res.json(product))
                .catch(err => res.status(400).json(err));
        }
    } catch (error) {
        res.status(400).json(error)
    }
}