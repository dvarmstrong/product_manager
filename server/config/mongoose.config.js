const mongoose = require('mongoose');

// *connect to mongoose to create the mongodb database
mongoose.connect('mongodb://127.0.0.1:27017/product_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong', err));
