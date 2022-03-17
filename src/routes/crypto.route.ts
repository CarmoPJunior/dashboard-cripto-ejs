import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import MercadoBitCoinApi from "../services/mercadobitcoin.api.service";

const route = Router();

route.get("/coins", async function (req, res, next) {
  const data = await MercadoBitCoinApi.get("symbols")
    .then(response => response.data)
    .catch(err => { res.status(StatusCodes.BAD_GATEWAY).json(err.message) });

  res.status(StatusCodes.OK).json(data.symbol);
});

route.get("/coins/:coin", async function (req, res, next) {
  const { coin } = req.params;

  const data = await MercadoBitCoinApi.get("tickers", { params: { symbols: coin } })
    .then(response => response.data)
    .catch(err => { res.status(StatusCodes.BAD_GATEWAY).json(err.message) });

  res.status(StatusCodes.OK).send(data);
});

route.get("/coins/:coin/trades", async function (req, res, next) {
  const { coin } = req.params;

  const data = await MercadoBitCoinApi.get(`${coin}/trades`)
    .then(response => response.data)
    .catch(err => { res.status(StatusCodes.BAD_GATEWAY).json(err.message) });

  res.status(StatusCodes.OK).send(data);
});

export default route;
