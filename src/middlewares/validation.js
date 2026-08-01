import Joi from 'joi';

const validate = (schema) => (req, res, next) => {
    const dataToValidate = {};
    const schemaToApply = {};

    ['params', 'query', 'body'].forEach((key) => {
        if (schema[key]) {
            dataToValidate[key] = req[key];
            schemaToApply[key] = schema[key];
        }
    })

    const { error, value } = Joi.object(schemaToApply).validate(dataToValidate, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        return res.status(400).json({
            message: 'Invalid request',
            error: error.details.map((e) => ({
                message: e.message
            }))
        })
    }
    next();
};

export default validate;