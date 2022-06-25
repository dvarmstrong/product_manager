const { update } = require('../models/product.model');
const Product = require('../models/product.model');

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then((products) => {
            console.log(products);
            res.json(products);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
}

module.exports.getProduct = (req, res) => {
    Product.findById({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updateProduct =>res.json(updateProduct))
        .catch(err => res.status(400).json(err));
}


module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err));
}


