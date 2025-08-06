import { Router } from "express";
import { getProdutos } from "../controller/produtoController";
const produtoRouter = Router();

produtoRouter.get("/produtos",getProdutos)

export default produtoRouter