import { SearchX } from "lucide-react";
import { Venue } from "@/types/venue";
import VenueCard from "@/components/VenueCard";

interface VenueListProps {
  venues: Venue[];
  onBookNow: (venue: Venue) => void;
}

export default function VenueList({ venues, onBookNow }: VenueListProps) {
  if (venues.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 py-16 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
          <SearchX className="h-6 w-6 text-gray-400" />
        </div>
        <p className="text-base font-medium text-gray-900">
          No venues found matching your criteria
        </p>
        <p className="text-sm text-gray-500">
          Try adjusting your search, city, or sort filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {venues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} onBookNow={onBookNow} />
      ))}
    </div>
  );
}
