"use client";

import { Search, MapPin, ArrowUpDown } from "lucide-react";

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
  return (
    <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 md:flex-row md:items-center md:gap-4">
      {/* Search input */}
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search venues by name..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pr-3 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        />
      </div>

      {/* City dropdown */}
      <div className="relative md:w-56">
        <MapPin className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-2.5 pr-8 pl-10 text-sm text-gray-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        >
          <option value="all">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Sort buttons */}
      <div className="flex items-center gap-2 rounded-xl bg-gray-50 p-1 md:w-auto">
        <ArrowUpDown className="ml-1.5 hidden h-4 w-4 shrink-0 text-gray-400 sm:block" />
        <div className="grid w-full grid-cols-3 gap-1 sm:w-auto sm:flex">
          <button
            type="button"
            onClick={() => setSortBy("default")}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              sortBy === "default"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Default
          </button>
          <button
            type="button"
            onClick={() => setSortBy("asc")}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              sortBy === "asc"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Price: Low to High
          </button>
          <button
            type="button"
            onClick={() => setSortBy("desc")}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              sortBy === "desc"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Price: High to Low
          </button>
        </div>
      </div>
    </div>
  );
}
