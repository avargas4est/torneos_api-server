import "dotenv/config.js";
import express from "express";
import "express-async-errors";
import initializeRoutes from "./startup/routes";

const app = express();
const port = process.env.PORT || 4000;

initializeRoutes(app);

process.on("uncaughtException", (err) => console.log(err.message));

process.on("unhandledRejection", (err) => console.log(err.message));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
