import { Router } from "express";

const route = Router();

// index page
route.get("/home", function (req, res, next) {
  const coins = [
    { name: "Bitcoin", abbreviation: "BTC", lastValue: "R$ 196.355", percentLastVariations: "0.25%" },
    { name: "Bitcoin", abbreviation: "BTC", lastValue: "R$ 196.355", percentLastVariations: "0.25%" },
    { name: "Bitcoin", abbreviation: "BTC", lastValue: "R$ 196.355", percentLastVariations: "0.25%" },
    { name: "Bitcoin", abbreviation: "BTC", lastValue: "R$ 196.355", percentLastVariations: "0.25%" }
  ];

  res.render("pages/index", { coins });
});

// ejs example page
route.get("/ejs-example", function (req, res) {
  const tagline = "No programming concept is complete without a cute animal mascot.";

  const mascots = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 }
  ];

  res.render("pages/ejs-example", {
    mascots: mascots,
    tagline: tagline
  });
});

export default route;
