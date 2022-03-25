import { Router } from "express";
import Container from "typedi";
import { EventHandler } from "../core/event";

const router = Router();

router.post("/whatsapp", (req, res) => {
  const eventHandler = Container.get(EventHandler);

  eventHandler.handleEvent(req.body);

  return res.json({ success: true });
});

export default router;
