import mysql from "promise-mysql";

export const getConnection = () =>
  mysql.createConnection({
    host: process.env.HOST || "localhost",
    database: process.env.DATABASE || "torneos",
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "",
  });
