# Store Rating System

A full-stack web application built using React, Node.js, Express.js, and PostgreSQL that allows users to register, log in, view stores, search stores, and submit ratings.

## Features

- User Signup
- User Login
- View Store List
- Search Stores
- Submit Ratings
- Update Existing Ratings
- Average Rating Calculation
- PostgreSQL Database Integration
- REST API Architecture

## Tech Stack

### Frontend
- React.js
- Axios
- React Router

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL
- pg (Node PostgreSQL Driver)

## Project Structure

```text
store-rating-system
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── db.js
│   └── server.js
│
├── src
├── public
├── package.json
└── README.md
```

### Authentication

#### Signup

```http
POST /api/auth/signup
```

#### Login

```http
POST /api/auth/login
```

### Stores

#### Get All Stores

```http
GET /api/stores
```

### Ratings

#### Add / Update Rating

```http
POST /api/ratings
```

## Installation

### Clone Repository

```bash
git clone https://github.com/ishaan-06-chilka/store-rating-system.git
```

### Install Frontend Dependencies

```bash
npm install
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

## Run Application

### Start Backend

```bash
cd backend
node server.js
```

### Start Frontend

```bash
npm run dev
```

### Open Browser

```text
http://localhost:5173
```

## Future Improvements

- Password Encryption using bcrypt
- JWT Authentication
- Admin Dashboard
- Store Owner Dashboard
- Improved UI using Tailwind CSS
- Deployment on Vercel and Render

## Author

**Ishaan Chilka**

GitHub:
https://github.com/ishaan-06-chilka
