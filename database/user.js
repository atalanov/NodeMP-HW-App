import sequelize from "./connection";
import Sequelize from "sequelize";

const user = sequelize.define("user",{
    name: Sequelize.STRING,
    password: Sequelize.STRING
});
user.sync();
export default user;