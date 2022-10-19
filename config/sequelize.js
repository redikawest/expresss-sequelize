import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()


const maindb = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
    timezone: '+07:00',
})

export default maindb