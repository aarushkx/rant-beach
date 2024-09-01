import express from "express";
import { createRant, getAllRants } from "../controllers/rant.controller.js";

const router = express.Router();

router.get("/all", getAllRants);
router.post("/create", createRant);

export default router;
