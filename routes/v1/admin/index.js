import express from "express";
import product from "./product";

const routes = express.Router()

routes.use('/product', product)

export default routes