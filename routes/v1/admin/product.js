import express from "express";
import * as productController from "../../../controllers/admin/productController";
import * as validation from "../../../middleware/validation/productValidation";

const routes = express.Router()

routes.get('', productController.gets)
routes.get('/:productId', productController.get)
routes.post('', validation.create(), productController.create)
routes.put('/:productId', productController.update)
routes.delete('/:productId', productController.deleted)

export default routes