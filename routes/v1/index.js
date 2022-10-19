import express from "express";
import admin from "./admin/index"
import user from "./user/index"

const routes = express.Router()
const adminUrl = '/administrator';
const userUrl = '/api';

routes.use(adminUrl, admin)
routes.use(userUrl, user)

export default routes