import mongoose from "mongoose";

const { Schema } = mongoose;

const venueSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        city: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        guestCapacity: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
            default: 4.5,
        },
    },
    { timestamps: true }
);

const Venue = mongoose.models.Venue || mongoose.model("Venue", venueSchema);

export default Venue;