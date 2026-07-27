import { Router } from "express";
import { getBookings, createBooking } from "../controllers/Booking.controller.js";

const router = Router();

router.get("/", getBookings);
router.post("/", createBooking);

export default router;