# Food Delivery App

A full-stack web application for a food delivery service, built with React for the frontend and admin panel, and Node.js/Express for the backend API. The app allows users to browse food items, add them to a cart, place orders, and track their status. Admins can manage food items, view orders, and handle the inventory.

## Features

### User Frontend
- **User Authentication**: Register, login, and logout functionality.
- **Food Browsing**: Explore food items by category (e.g., Salad, Rolls, Desserts).
- **Cart Management**: Add/remove items from the cart, view total amount including delivery charges.
- **Order Placement**: Place orders with delivery address and payment integration via Stripe.
- **Order Tracking**: View order history and status (e.g., Food Processing, Out for Delivery).
- **Responsive Design**: Optimized for desktop and mobile devices.

### Admin Panel
- **Food Management**: Add new food items with images, descriptions, prices, and categories.
- **Order Management**: View and update order statuses.
- **Inventory List**: Display all food items for easy management.

### Backend API
- **User Management**: Handle user registration, login, and profile data.
- **Food CRUD**: Create, read, update, and delete food items.
- **Cart Operations**: Add/remove items from user carts.
- **Order Processing**: Create orders, handle payments, and update statuses.
- **Image Upload**: Support for uploading food images.
- **Authentication Middleware**: JWT-based authentication for secure API access.

## Tech Stack

- **Frontend**: React 18, React Router DOM, Axios, React Toastify, Vite
- **Admin Panel**: React 18, React Router DOM, Axios, React Toastify, Vite
- **Backend**: Node.js, Express.js, MongoDB (via Mongoose), JWT, Bcrypt, Multer, Stripe, Cors, Dotenv
- **Database**: MongoDB
- **Payment Gateway**: Stripe
- **Deployment**: Not specified (can be deployed on platforms like Vercel for frontend, Heroku for backend)

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn package manager

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/food-delivery-app.git
cd food-delivery-app
```

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   PORT=4000
   ```

4. Start the backend server:
   ```bash
   npm run server
   ```
   The server will run on `http://localhost:4000`.

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173` (default Vite port).

### 4. Admin Panel Setup
1. Navigate to the admin directory:
   ```bash
   cd ../admin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the admin development server:
   ```bash
   npm run dev
   ```
   The admin panel will run on `http://localhost:5174` (or next available port).

## Usage

1. **User App**: Open `http://localhost:5173` in your browser. Register/login, browse food, add to cart, and place orders.
2. **Admin Panel**: Open the admin URL in your browser. Add food items, manage orders.
3. **API**: The backend provides RESTful APIs for all operations. Base URL: `http://localhost:4000/api`.

### Key API Endpoints
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (admin)
- `POST /api/cart/add` - Add item to cart
- `POST /api/order/place` - Place an order
- `GET /api/order/userorders` - Get user orders

For detailed API documentation, refer to the backend code or use tools like Postman.

## Project Structure

```
food-del/
├── admin/          # Admin panel (React)
├── backend/        # Backend API (Node.js/Express)
├── frontend/       # User frontend (React)
├── How To Run Project.pdf  # Additional setup guide
└── README.md       # This file
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the ISC License.

## Screenshots

(Add screenshots here if available, e.g., of the frontend, admin panel, etc.)

## Contact

For questions or support, contact [your-email@example.com].
