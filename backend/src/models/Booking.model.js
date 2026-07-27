import mongoose from "mongoose";

const { Schema } = mongoose;

const bookingSchema = new Schema(
    {
        customerName: {
            type: String,
            required: true,
        },
        mobileNumber: {
            type: String,
            required: true,
        },
        venueId: {
            type: Schema.Types.ObjectId,
            ref: "Venue",
            required: true,
        },
        eventDate: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

const Booking =
    mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking;