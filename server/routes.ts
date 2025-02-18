import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";
import cors from "cors";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Enable CORS
  app.use(cors());

  app.post("/api/contact", async (req, res) => {
    try {
      const contact = insertContactSchema.parse(req.body);
      await storage.createContact(contact);
      
      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "wayamojaent@gmail.com, mwangiianjk20@gmail.com",
        subject: "New Contact Form Submission",
        text: `
          Name: ${contact.name}
          Email: ${contact.email}
          Message: ${contact.message}
        `
      });

      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid contact form data" });
    }
  });

  app.post("/api/schedule", async (req, res) => {
    try {
      const schedule = req.body;
      
      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "wayamojaent@gmail.com, mwangiianjk20@gmail.com",
        subject: "New Schedule Request",
        text: `
          Name: ${schedule.name}
          Email: ${schedule.email}
          Phone: ${schedule.phone}
          Service: ${schedule.service}
          Message: ${schedule.message}
        `
      });

      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid schedule data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
