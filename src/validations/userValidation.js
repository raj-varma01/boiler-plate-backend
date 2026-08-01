import Joi from 'joi';

const getUserData = {
    query: Joi.object({
        page: Joi.number().required(),
        limit: Joi.number().required(),
        search: Joi.string().trim().allow('', null)
    })
}

export default {
    getUserData
}