import './utils/global.js'

import express from "express";
import cors from "cors";
import { Rotas } from "./routes.js";


const api = express();
api.use(cors());
api.use(express.json());

Rotas(api)


api.listen(5010, () => console.log('API subiu'));