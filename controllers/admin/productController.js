import * as productLogic from "../../repositories/product/productLogic";

export const gets = (req, res) => {
    return productLogic.gets(res, res)
}

export const get = (req, res) => {
    return productLogic.get(res, req.params.productId)
}

export const create = (req, res) => {
    return productLogic.create(req, res)
}

export const update = (req, res) => {
    return productLogic.update(req, res, req.params.productId)
}

export const deleted = (req, res) => {
    return productLogic.deleted(res, req.params.productId)
}