import sequelize from "./connection";
import Sequelize from "sequelize";

const product = sequelize.define("product",{
    id:{type:Sequelize.INTEGER, primaryKey:true},
    name:Sequelize.STRING,
    brand:Sequelize.STRING,
    company:Sequelize.STRING,
    price:Sequelize.STRING,
    isbn:Sequelize.STRING
});
product.sync();

export default product;