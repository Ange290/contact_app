const express =require("express");
const router = express.Router(); // Corrected instantiation
const contactController= require("../controllers/contact.controller.js");

router.post("/api/create", contactController.createContact);
router.get("/api/get", contactController.getContact);
module.exports= router;