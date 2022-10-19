import express from "express";
import v1 from "./v1/index"

const routes = express.Router()

routes.use('/v1', v1)

export default routes