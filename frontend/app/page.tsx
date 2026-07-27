"use client";

import { useMemo, useState, useEffect } from "react";
import { Venue } from "@/types/venue";
import SearchAndFilter from "@/components/SearchAndFilter";
import VenueList from "@/components/VenueList";
import BookingModal from "@/components/BookingModal";
import { Loader, Loader2Icon } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        let response = await fetch(
          `${process.env.API}/api/v1/venues?search=${searchQuery}&city=${selectedCity}&sort=${sortBy}`,
        );

        // Assuming the API returns an array of venues
        let data = await response.json();
        setVenues(data);
        // console.log("Fetched venues:", data);
        // You can update your state here if needed
      } catch (error) {
        console.error("Error fetching venues:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [searchQuery, selectedCity, sortBy]);

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Goa",
    "Agra",
    "Chennai",
    "Udaipur",
  ];

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const handleBookNow = (venue: Venue) => {
    setSelectedVenue(venue);
    setIsBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <BookingModal
        venue={selectedVenue}
        isOpen={isBookingModalOpen}
        setIsBookingModalOpen={setIsBookingModalOpen}
      />
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find Your Perfect Event Venue
          </h1>
          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Browse and book top-rated venues across India for your next event.
          </p>
        </div>
        <div className="mb-8">
          <SearchAndFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            sortBy={sortBy}
            setSortBy={setSortBy}
            cities={cities}
          />
        </div>
        {loading ? (
          <div className="flex h-96 w-full items-center justify-center">
            {" "}
            <Loader2Icon className="text-black animate-spin" />
          </div>
        ) : (
          <VenueList venues={venues} onBookNow={handleBookNow} />
        )}
      </div>
    </main>
  );
}
