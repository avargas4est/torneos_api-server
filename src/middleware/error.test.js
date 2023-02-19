import { Router } from "express";
const router = Router();

router.get("/1", (req, res) => {
  throw new Error("Server Error bruh.");
});

router.get("/2", (req, res) => {
  res.send(parentInt("adlgj*/"));
});

router.get("/3", async (req, res) => {
  return await Promise.reject(new Error("Promise error brah"));
});

export default router;
