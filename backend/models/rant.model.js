import mongoose, { Schema } from "mongoose";

const rantSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Rant = mongoose.model("Rant", rantSchema);

export default Rant;
