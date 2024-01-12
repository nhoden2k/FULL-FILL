import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouter from "./route/web.js";
import connectDB from "./config/connectDB";
// import cors from "cors";
require("dotenv").config();

let app = express();

// app.use(cors)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouter(app);

connectDB();
let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("listening on port " + port);
});
