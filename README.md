# E-Commerce Website

A full-stack E-Commerce web application with modern UI, user authentication, admin dashboard, product management, shopping cart, order management, and more. Built with React (Vite, Tailwind CSS) for the frontend and Node.js (Express, MongoDB) for the backend.

## Features

### User

- User registration & login (authentication)
- Browse products with filters and search
- Product details with reviews and ratings
- Add to cart, update quantity, remove items
- Checkout with address management and payment gateway integration (PayPal)
- View order history and order details
- Manage delivery addresses

### Admin

- Admin authentication
- Dashboard with sales and order stats
- Manage products (add, edit, delete)
- Manage orders (view, update status)
- View and manage users

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT
- **Image Uploads:** Cloudinary
- **Payments:** PayPal API

## Project Structure

```
root/
│
├── client/      # Frontend (React)
│   └── src/
│       └── components/
│       └── pages/
│       └── store/
│       └── ...
│
├── server/      # Backend (Node.js/Express)
│   └── controllers/
│   └── models/
│   └── routes/
│   └── helpers/
│   └── ...
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd <project-root>
   ```

2. **Install dependencies:**

   - For client:

     ```sh
     cd client
     npm install
     ```

   - For server:
     ```sh
     cd ../server
     npm install
     ```

3. **Set up environment variables:**

   - Create `.env` files in both `client` and `server` directories as needed (see sample `.env.example` if provided).

4. **Start the development servers:**

   - Start backend:
     ```sh
     cd server
     npm run dev
     ```
   - Start frontend:
     ```sh
     cd ../client
     npm run dev
     ```

5. **Open the app:**
   - Visit `http://localhost:5173` (or the port shown in terminal) for the frontend.

## Screenshots

See the `Demo/` folder for UI screenshots of various pages.

## License

This project is licensed under the MIT License.
