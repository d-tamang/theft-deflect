const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePinInput(data) {
    let errors = {};

    data.category = validText(data.category) ? data.category : '';
    data.description = validText(data.description) ? data.description : '';

    if (Validator.isEmpty(data.category)) {
        errors.category = "Category field is required";
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = "Description field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};