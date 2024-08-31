import express from "express";
import {
    createRant,
    commentOnRant,
    getAllRants,
} from "../controllers/rant.controller.js";

const router = express.Router();

router.get("/", getAllRants);
router.post("/create", createRant);
router.post("/comment/:id", commentOnRant);

export default router;
