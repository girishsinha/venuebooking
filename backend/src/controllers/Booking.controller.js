import Booking from "../models/Booking.model.js";
import Venue from "../models/Venue.model.js";

const PHONE_REGEX = /^\d{10}$/;

export const createBooking = async (req, res) => {
    try {

        const { customerName, mobileNumber, venueId, eventDate } = req.body;

        if (!customerName || !mobileNumber || !venueId || !eventDate) {
            return res.status(400).json({
                message:
                    "customerName, mobileNumber, venueId, and eventDate are all required.",
            });
        }

        if (!PHONE_REGEX.test(mobileNumber)) {
            return res.status(400).json({
                message: "mobileNumber must be exactly 10 digits.",
            });
        }

        const venue = await Venue.findById(venueId);

        if (!venue) {
            return res.status(404).json({ message: "Venue not found." });
        }

        const booking = await Booking.create({
            customerName,
            mobileNumber,
            venueId,
            eventDate,
        });

        return res.status(201).json({
            message: "Booking created successfully",
            data: booking,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to create booking",
            error: error.message,
        });
    }
};

export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({}).populate("venueId");
        return res.status(200).json(bookings);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch bookings",
            error: error.message,
        });
    }
};