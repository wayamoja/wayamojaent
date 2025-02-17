import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const contact = insertContactSchema.parse(req.body);
      await storage.createContact(contact);
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid contact form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
