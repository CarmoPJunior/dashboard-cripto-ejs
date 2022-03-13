import "dotenv/config";
import express from "express";

import Index from "./routes/index.route";
// import User from "./routes/user.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set("view engine", "ejs");
// set folder "public" in express
app.use(express.static("public"));

app.use("/", Index);

// index page
app.get("/home", function (req, res) {
  res.render("pages/index");
});

// ejs example page
app.get("/ejs-example", function (req, res) {
  const mascots = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 }
  ];
  const tagline = "No programming concept is complete without a cute animal mascot.";

  res.render("pages/ejs-example", {
    mascots: mascots,
    tagline: tagline
  });
});

export { app };
