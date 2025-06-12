# E-Commerce Website

A full-stack E-Commerce web application with modern UI, user authentication, admin dashboard, product management, shopping cart, order management, and more. Built with React (Vite, Tailwind CSS) for the frontend and Node.js (Express, MongoDB) for the backend.

## Important Note: 

"I forgot to create a .env file 😅😅 and kept building the project until it was halfway done — so don’t forget to set up your .env file early and keep your API keys safe! 😉😉"

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

## Environment Variables & Security

**Important:** Never commit sensitive information (API keys, secrets, database URIs, etc.) directly in your code. Always use environment variables and a `.env` file to keep your credentials secure.

### How to Use a `.env` File

1. **Create a `.env` file** in both your `client` and `server` directories (if both need environment variables).

2. **Move all sensitive values** (API keys, database URIs, secret tokens, etc.) from your code into the `.env` file. For example:

   **server/.env**

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   PAYPAL_CLIENT_ID=your_paypal_client_id
   ```

   **client/.env**

   ```env
   VITE_API_URL=http://localhost:5000
   VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
   ```

   > Note: For Vite (React), all environment variables must start with `VITE_`.

3. **Access environment variables in your code:**

   - In Node.js (server):
     ```js
     const db = process.env.MONGODB_URI;
     const secret = process.env.JWT_SECRET;
     ```
   - In Vite (client):
     ```js
     const apiUrl = import.meta.env.VITE_API_URL;
     ```

4. **Add `.env` to `.gitignore`** to prevent it from being committed to your repository:

   - Add the following line to your `.gitignore` file in both `client` and `server`:
     ```gitignore
     .env
     ```

5. **Restart your development server** after making changes to the `.env` file.

### What to do if you committed an API key by mistake?

- Remove the key from your code and move it to `.env`.
- Change/regenerate the key from your provider's dashboard if possible.
- Commit the changes and push.

## Screenshots

See the `Demo/` folder for UI screenshots of various pages.

## License

This project is licensed under the MIT License.
