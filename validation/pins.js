const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePinInput(data) {
    let errors = {};

    data.description = validText(data.description) ? data.description : '';

    if (!Validator.isLength(data.description, { min: 2, max: 100 })) {
        errors.description = 'Description must be between 2 and 100 characters';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};