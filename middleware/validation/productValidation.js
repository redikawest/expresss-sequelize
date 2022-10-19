import Joi from "joi";

export const create = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().empty(''),
        price: Joi.number().required(),
        stock: Joi.number().required()
    })
}