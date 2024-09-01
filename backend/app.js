import express from "express";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

import rantRoutes from "./routes/rant.routes.js";

app.use("/api/v1/rant", rantRoutes);

export { app };
