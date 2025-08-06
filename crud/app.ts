import express from "express";
import produtoRouter from "./src/routes/produtoRoutes";
import pool from "./src/config/database";
import path from "path";
const app = express();
const PORT = 3244;
app.use(express.json());

app.use("/api", produtoRouter);

pool
  .getConnection()
  .then(() => {
    console.log("Conectado ao banco de dadudos");
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  })
  .catch((error: any) => {
    console.error(error);
  });
