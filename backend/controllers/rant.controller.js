import { asyncHandler } from "../utils/asyncHandler.js";
import Rant from "../models/rant.model.js";

export const createRant = asyncHandler(async (req, res) => {
    const { title, body } = req.body;

    if (!title || title.trim() === "")
        return res.status(400).json({ error: "Title is required" });

    if (title.length > 300)
        return res.status(400).json({
            error: "Title cannot exceed 300 characters",
        });

    if (!body || body.trim() === "")
        return res.status(400).json({ error: "Body is required" });

    if (body.length > 3000)
        return res.status(400).json({
            error: "Body cannot exceed 3000 characters",
        });

    const rant = await Rant.create({ title, body });
    await rant.save();

    res.status(201).json(rant);
});

export const getAllRants = asyncHandler(async (_, res) => {
    const rants = await Rant.find().sort({ createdAt: -1 });

    if (rants.length === 0) return res.status(200).json([]);

    res.status(200).json(rants);
});
