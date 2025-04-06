# Online Pharmacy Backend

A robust Node.js backend API for an online pharmacy application that handles products, orders, user authentication, and cart management.

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Database Models](#database-models)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [License](#license)

## 🏗️ Project Structure

```
├── config            # Configuration files (database, env, etc.)
├── controllers       # Request handlers for different routes
├── middlewares       # Custom middleware functions
├── models            # Database models/schemas
├── node_modules      # Dependencies
├── routes            # API route definitions 
├── uploads           # File storage for product images
├── .gitignore        # Git ignore file
├── package.json      # Project dependencies and scripts
├── package-lock.json # Locks dependencies versions
├── README.md         # Project documentation
└── server.js         # Main application entry point
```

## ✨ Features

- User authentication with JWT
- Product management
- Shopping cart functionality
- Order processing
- Payment integration with Razorpay
- File uploads for product images
- Authorization and role-based access

## 🛠️ Technologies

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Processing**: Razorpay
- **Image Storage**: Local storage with Multer

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/online-pharmacy-backend.git
   cd online-pharmacy-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables))

4. Start the development server:
   ```bash
   npm run dev
   ```

5. For production:
   ```bash
   npm start
   ```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/pharmacy
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
NODE_ENV=development
```

## 📡 API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and get token

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `POST /products` - Create a new product (Admin)
- `PUT /products/:id` - Update a product (Admin)
- `DELETE /products/:id` - Delete a product (Admin)

### Cart
- `GET /cart/all` - Get user's cart
- `POST /cart/add` - Add item to cart
- `PUT /cart/:id` - Update cart item quantity
- `DELETE /cart/:id` - Remove item from cart

### Orders
- `POST /orders/place` - Place a new order
- `GET /orders` - Get user's orders
- `GET /orders/:id` - Get order by ID

## 🔍 Middleware

- **Authentication**: Validates user JWT tokens
- **Error Handler**: Global error handling
- **File Upload**: Handles product image uploads
- **Role Check**: Verifies user permissions

## 📊 Database Models

- **User**: User information and authentication details
- **Product**: Product details including name, description, price, etc.
- **Cart**: User's shopping cart items
- **Order**: Order information including items, payment status, etc.

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication. To access protected routes:

1. Obtain a token by logging in
2. Include the token in the request header:
   ```
   headers: { token: 'your_jwt_token' }
   ```

## 🌐 Deployment

The API is currently deployed on Render:
- Base URL: `https://online-pharmacy-backend.onrender.com`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
