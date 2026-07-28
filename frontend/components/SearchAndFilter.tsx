"use client";

import { Search, MapPin, ArrowUpDown, MoveRight } from "lucide-react";
import { useState } from "react";

interface SearchAndFilterProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  selectedCity: string;
  setSelectedCity: (v: string) => void;
  sortBy: string; // 'asc' | 'desc' | 'default'
  setSortBy: (v: string) => void;
  cities: string[];
}

export default function SearchAndFilter({
  searchQuery,
  setSearchQuery,
  selectedCity,
  setSelectedCity,
  sortBy,
  setSortBy,
  cities,
}: SearchAndFilterProps) {
  const [query, setQuery] = useState(searchQuery);
  return (
    <div className="-mt-28 sm:-mt-28 flex w-full flex-col gap-3 rounded-2xl bg-[#111518]/80 sm:p-8 p-4 shadow-sm backdrop-blur-2xl ring-1 ring-background/20 md:flex-row md:items-center md:gap-4 z-40">
      {/* Search input */}
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search venues by name..."
          className="w-full rounded-xl border border-background/20 bg-[#111518]/20 py-2.5 pr-3 pl-10 text-sm text-background placeholder:text-background/50 focus:border-primary focus:bg-[#111518]/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="button"
          onClick={() => setSearchQuery(query)}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-background shadow-sm transition-colors duration-200 hover:bg-[#111518]/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:bg-primary"
        >
          <MoveRight />
        </button>
      </div>

      {/* City dropdown */}
      <div className="relative md:w-56">
        <MapPin className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-background" />
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full appearance-none rounded-xl border border-background/20 bg-[#111518]/20 py-2.5 pr-8 pl-10 text-sm text-background focus:border-primary focus:bg-[#111518] focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Sort buttons */}
      <div className="flex items-center gap-2 rounded-xl bg-[#111518]/20 p-1 md:w-auto">
        <ArrowUpDown className="ml-1.5 hidden h-4 w-4 shrink-0 text-background sm:block" />
        <div className="grid w-full grid-cols-3 gap-1 sm:w-auto sm:flex">
          <button
            type="button"
            onClick={() => setSortBy("")}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              sortBy === ""
                ? "bg-primary text-background shadow-sm"
                : "text-background hover:bg-[#111518]/20"
            }`}
          >
            Default
          </button>
          <button
            type="button"
            onClick={() => setSortBy("asc")}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              sortBy === "asc"
                ? "bg-primary text-background shadow-sm"
                : "text-background hover:bg-[#111518]/20  "
            }`}
          >
            Price: Low to High
          </button>
          <button
            type="button"
            onClick={() => setSortBy("desc")}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              sortBy === "desc"
                ? "bg-primary text-background shadow-sm"
                : "text-background hover:bg-[#111518]/20"
            }`}
          >
            Price: High to Low
          </button>
        </div>
      </div>
    </div>
  );
}
