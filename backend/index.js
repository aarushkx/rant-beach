import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env",
});

connectMongoDB()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running at port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("MONGODB connection failed!", error);
    });
