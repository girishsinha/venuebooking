import { Router } from "express";
import { getVenues, seedVenues } from "../controllers/venue.controller.js";

const router = Router();

router.get("/", getVenues);
router.post("/seed", seedVenues);

export default router;