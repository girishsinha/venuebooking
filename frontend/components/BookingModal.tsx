"use client";

import { useState } from "react";
import { X, MapPin } from "lucide-react";
import { Venue } from "@/types/venue";

interface BookingModalProps {
  venue: Venue | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    customerName: string;
    mobileNumber: string;
    eventDate: string;
    venueId: string;
  }) => void;
}

interface FormErrors {
  customerName?: string;
  mobileNumber?: string;
  eventDate?: string;
}

const PHONE_REGEX = /^[6-9]\d{9}$/;

export default function BookingModal({
  venue,
  isOpen,
  onClose,
  onSubmit,
}: BookingModalProps) {
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  if (!isOpen || !venue) {
    return null;
  }

  const resetForm = () => {
    setCustomerName("");
    setMobileNumber("");
    setEventDate("");
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!customerName.trim()) {
      nextErrors.customerName = "Please enter your name.";
    }

    if (!mobileNumber.trim()) {
      nextErrors.mobileNumber = "Please enter your mobile number.";
    } else if (!PHONE_REGEX.test(mobileNumber.trim())) {
      nextErrors.mobileNumber = "Enter a valid 10-digit mobile number.";
    }

    if (!eventDate) {
      nextErrors.eventDate = "Please select an event date.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit({
      customerName: customerName.trim(),
      mobileNumber: mobileNumber.trim(),
      eventDate,
      venueId: venue.id,
    });

    resetForm();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 p-5">
          <div>
            <h2
              id="booking-modal-title"
              className="text-lg font-semibold text-gray-900"
            >
              {venue.name}
            </h2>
            <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>{venue.city}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close booking form"
            className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5">
          <div>
            <label
              htmlFor="customerName"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Customer Name
            </label>
            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter your full name"
              className={`w-full rounded-xl border bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.customerName
                  ? "border-red-300 focus:ring-red-500/20"
                  : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-500/20"
              }`}
            />
            {errors.customerName && (
              <p className="mt-1 text-xs text-red-600">{errors.customerName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="mobileNumber"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              type="tel"
              inputMode="numeric"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="10-digit mobile number"
              className={`w-full rounded-xl border bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.mobileNumber
                  ? "border-red-300 focus:ring-red-500/20"
                  : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-500/20"
              }`}
            />
            {errors.mobileNumber && (
              <p className="mt-1 text-xs text-red-600">{errors.mobileNumber}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="eventDate"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Event Date
            </label>
            <input
              id="eventDate"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className={`w-full rounded-xl border bg-gray-50 px-3 py-2.5 text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.eventDate
                  ? "border-red-300 focus:ring-red-500/20"
                  : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-500/20"
              }`}
            />
            {errors.eventDate && (
              <p className="mt-1 text-xs text-red-600">{errors.eventDate}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-indigo-800"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
