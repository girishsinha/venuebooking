# Wedven - Venue Booking Platform

A full-stack web application built to explore, filter, and book event venues seamlessly. Developed as part of the technical assignment for the Full Stack Developer Intern position at Wedven.

---

## Overview

The application consists of a modern, responsive frontend built with Next.js (TypeScript) and styled using Tailwind CSS, paired with a robust RESTful API backend powered by Node.js, Express, and MongoDB.

### Features

#### **Frontend**

- **Venue Listing Grid:** Clean UI displaying venue details (Image, Name, City, Price, Capacity, Rating).
- **Dynamic Search:** Real-time search bar filtering venues by name.
- **City Filter:** Filter venues based on selected cities.
- **Price Sorting:** Sort venues by price (Low to High, High to Low).
- **Responsive Design:** Optimized layout for desktop, tablet, and mobile devices.
- **Booking Modal:** Interactive form allowing users to submit booking requests directly to the API.

#### **Backend**

- **RESTful Endpoints:** Endpoints to fetch venues and manage customer bookings.
- **Input Validation:** Strict field validation for booking details (Name, Mobile Number, Venue ID, Event Date).
- **Database Integration:** MongoDB integration using Mongoose models.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js (ES Modules)
- **Database:** MongoDB (via Mongoose)
- **Deployment:** Vercel (Frontend), Render / Railway (Backend)

---

## 📁 Project Structure

```text
root/
├── frontend/                     # Next.js Frontend
│   ├── src/
│   │   ├── app/                # Next.js App Router (pages & layout)
│   │   ├── components/         # VenueCard, SearchAndFilter, BookingModal
│   │   └── types/              # TypeScript interfaces
│   │
│   └── package.json
│
└── backend/                     # Node.js + Express Backend
    ├── src/
    │   ├── db/                 # MongoDB connection configuration
    │   ├── models/             # Venue & Booking Mongoose Schemas
    │   ├── controllers/        # Business logic for venues and bookings
    │   ├── routes/             # Express routes
    │   └── app.js              # Express app setup & middleware
    ├── index.js                # Entry point & server listener
    └── package.json
```
