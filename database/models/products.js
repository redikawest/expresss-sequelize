import maindb from "../../config/sequelize";

const Products = maindb.define('products', {

  name: maindb.Sequelize.STRING,
  description: maindb.Sequelize.STRING,
  price: maindb.Sequelize.INTEGER,
  stock: maindb.Sequelize.INTEGER

}, {freezeTableName: true, paranoid: true})

export default Products