import express from "express";
import {errorMiddleware} from "../middleware/error-middleware.js";
import {theRouter} from "../route/api.js";

export const web = express();
web.use(express.json());

web.use(theRouter);

web.use(errorMiddleware);