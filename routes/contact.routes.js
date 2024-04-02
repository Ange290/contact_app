import express from "express";
const router = express.Router(); // Corrected instantiation
import contactController from "../controllers/contact.controller.js";

router.post("/api/create", contactController.createContact);
router.get("/api/get", contactController.getContact);
export default router;