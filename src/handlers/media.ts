import express, { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

const staticMiddleware = express.static("static");

router.get("/:file", (req, res, next) => {
  const { token } = req.query;

  if (!token) return res.status(401).send("Unauthorized");

  try {
    jwt.verify(token as string, "secret");
  } catch {
    return res.status(401).send("Unauthorized");
  }

  staticMiddleware(req, res, next);
});

router.get("/auth/generate", (req, res) => {
  const token = jwt.sign({ userId: "081213182520" }, "secret", {
    expiresIn: "1h",
  });

  return res.json({
    token,
  });
});

export default router;
