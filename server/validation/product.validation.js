const isEmpty = require('./isEmpty')
const validator = require('validator')

const validateProduct = (data) => {

    let errors = {}

    data.title = !isEmpty(data.title) ? data.title : ''
    data.price = !isEmpty(data.price) ? data.price : -1
    data.description = !isEmpty(data.description) ? data.description : ''


    if (data.title.length < 3) {
        errors.titleError = 'Product title must be at least 3 characters long.'
    }

    if (validator.isEmpty(data.title)) {
        errors.titleError = 'Product title is required.'
    }


    if (data.price < 0) {
        errors.priceError = 'Price must be at least 0.'
    }


    if (data.price === -1) {
        errors.priceError = 'Price is required.'
    }


    if (data.description.length < 3) {
        errors.descriptionError = 'Product description must be at least 3 characters long.'
    }

    if (validator.isEmpty(data.description)) {
        errors.descriptionError = 'Product description is required.'
    }


    return {
        errors,
        valid: isEmpty(errors)
    }
}

module.exports = {
    validateProduct
}
