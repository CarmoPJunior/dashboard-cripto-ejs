import "dotenv/config";
import express from "express";

import Index from "./routes/index.route";
import Crypto from "./routes/crypto.route";
import Pages from "./routes/pages.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set("view engine", "ejs");
// set folder "public" in express
app.use(express.static("public"));

app.use("/", Index);
app.use("/", Crypto);
app.use("/", Pages);

export { app };
