import express from "express";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import venueRouter from "./routes/Venue.routes.js";
import bookingRouter from "./routes/Booking.routes.js";

app.use("/api/v1/venues", venueRouter);
app.use("/api/v1/bookings", bookingRouter);

export { app };