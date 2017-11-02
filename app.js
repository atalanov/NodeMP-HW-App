import express from "express";
import cookieParser from "cookie-parser";
import qs from "./middlewares/qs";
import products from "./routes/products";
import users from "./routes/users";
import bodyParser from "body-parser";
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(qs);
app.use("/api/products",products);

export default app;