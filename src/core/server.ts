import express from "express";
import webhookRouter from "../handlers/webhook";
import mediaRouter from "../handlers/media";

export function createServer() {
  const app = express();

  app.use(express.json());

  app.use("/webhook", webhookRouter);
  app.use("/media", mediaRouter);

  return app;
}
