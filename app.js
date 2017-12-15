import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import qs from "./middlewares/qs";
import products from "./routes/products";
import users from "./routes/users";
import cities from "./routes/cities";
import bodyParser from "body-parser";
import auth from "./routes/auth";
import checktoken from "./middlewares/check-token";
import passportAuthentication from "./routes/passport";
import Sequelize from "sequelize";
const app = express();
const connectionString = 'mongodb://localhost:27017/nodejs-edu';
mongoose.connect(connectionString,{
    useMongoClient:true
});
let db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(qs);
app.use(auth);
app.use(passportAuthentication);
app.use("/api/users", users);
app.use("*", checktoken);
app.use("/api/products", products);
app.use("/api/cities", cities);
export default app;