const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.getProducts);
    app.post('/api/product', ProductController.createProduct);
}