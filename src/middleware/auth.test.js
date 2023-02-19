import { Router } from "express";
import auth from "./auth";

const router = Router();

const roles = {
  admin: 1,
  universidad: 2,
  staff: 3,
};

router.get("/", auth.isAuthenticated, (req, res) => {
  res.send("Authenticated");
});

router.get(
  "/2",
  auth.isAuthenticated,
  auth.isAuthorized(roles.admin),
  (req, res) => {
    res.send("Authorized");
  }
);

export default router;
