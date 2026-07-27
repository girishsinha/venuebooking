import Image from "next/image";
import { Star, Users, MapPin } from "lucide-react";
import { Venue } from "@/types/venue";

interface VenueCardProps {
  venue: Venue;
  onBookNow: (venue: Venue) => void;
}

export default function VenueCard({ venue, onBookNow }: VenueCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(venue.price);

  return (
    <div className="group flex w-full max-w-sm flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={venue.image}
          alt={venue.name}
          //   fill
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur-sm">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          {venue.rating.toFixed(1)}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{venue.name}</h3>
          <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>{venue.city}</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>Up to {venue.guestCapacity} guests</span>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">{formattedPrice}</p>
            <p className="text-xs text-gray-400">per event</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onBookNow(venue)}
          className="mt-2 w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-indigo-800"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
