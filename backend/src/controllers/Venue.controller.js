import Venue from "../models/Venue.model.js";

import { DUMMY_VENUES } from "../seeddata/dummy.js";

export const getVenues = async (req, res) => {
    try {
        const { search, city, sort } = req.query;
        const query = {};
        if (city) {
            query.city = city;
        }

        if (search) {
            query.name = { $regex: search, $options: "i" };
        }
        let sortOptions = {};

        if (sort === "asc") {
            sortOptions.price = 1;  // Low to High
        } else if (sort === "desc") {
            sortOptions.price = -1; // High to Low
        }
        const venues = await Venue.find(query).sort(sortOptions);
        return res.status(200).json(venues);
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch venues", error: error.message });
    }
};

export const seedVenues = async (req, res) => {
    try {
        const existingCount = await Venue.countDocuments();

        if (existingCount > 0) {
            return res.status(200).json({
                message: "Venues already exist. Seeding skipped.",
                count: existingCount,
            });
        }

        const seeded = await Venue.insertMany(DUMMY_VENUES);
        return res.status(201).json({
            message: "Venues seeded successfully",
            count: seeded.length,
            data: seeded,
        });
    } catch (error) {
        return res.status(500).json({ message: "Failed to seed venues", error: error.message });
    }
};