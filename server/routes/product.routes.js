const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/product', ProductController.getAllProducts);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/update/:id', ProductController.updateProduct)
    app.delete('/api/product/:id', ProductController.deleteProduct);
}