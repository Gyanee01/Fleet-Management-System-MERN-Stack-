# Fleet Management System - MERN Stack

This is a web-based fleet management system built using the MERN stack (MongoDB, Express, React, Node.js). It allows logistics teams to manage truck trips, monitor current loads, and preview trip routes on a map.

---

## Features

- View all trucks in the fleet with status (available/on trip)
- Manage trip data including start and end locations
- Display ongoing and completed trips
- Map preview for each trip using Leaflet and OpenStreetMap
- Backend APIs built with Express and Mongoose
- Clean and responsive frontend built with React and plain CSS

---

## Tech Stack

- Frontend: React, Axios, React Router
- Backend: Express.js, Node.js
- Database: MongoDB with Mongoose
- Mapping: Leaflet.js + OpenStreetMap tiles
- Dev Tools: Concurrently, MongoDB Compass

---

## How to Run the Project

1. Clone this repository


2. Install dependencies

For backend
cd server
npm install

For frontend
cd ../client
npm install


3. Start MongoDB on your machine (default port 27017)

4. Start both client and server


By default:
- Frontend runs on http://localhost:3000
- Backend API runs on http://localhost:5000

---

## Folder Structure

- `client/` – React frontend
- `server/` – Express backend with API routes and models
- `client/src/pages/` – Contains Dashboard, Trucks, Trips, TripDetail views
- `server/models/` – Mongoose schemas for Truck and Trip

---

## Purpose

This project was built as part of a client-facing demonstration. The goal was to showcase ability to build a full-stack application with proper API design, live map integration, and a clean UI that reflects real-world logistics operations.

---

## Future Improvements

- Add trip creation and editing
- Live GPS tracking updates via WebSockets
- Admin and driver authentication
- Trip delay notifications

---

## Contact

Gyanendra Sahu
LinkedIn: https://www.linkedin.com/in/w23gyan/
Email: gyanendra2301@gmail.com
