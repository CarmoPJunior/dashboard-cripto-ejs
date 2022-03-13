import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const route = Router();

route.get("/", function (req, res, next) {
  res.status(StatusCodes.OK).send({
    title: "Node Express API",
    version: "0.0.1"
  });
});

export default route;
