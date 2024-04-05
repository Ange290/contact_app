const express =require("express");
const router = express.Router(); // Corrected instantiation
const contactController= require("../controllers/contact.controller.js");

router.post("/api/create", contactController.createContact);
router.get("/api/get", contactController.getContact);
router.get("/api/id/:id", contactController.getById);
router.patch("/api/update/:id", contactController.updateContact);
router.delete("/api/delete/:id", contactController.deleteContact);
module.exports= router;