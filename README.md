# MERN Chat App 💬

Dive into real-time conversations with the **MERN Chat App** – a robust, full-stack application leveraging the power of **MongoDB, Express, React, and Node.js**. This project features secure **user authentication** with bcrypt, **JWT-based authorization**, and **real-time messaging** using **Socket.IO**.

---

## 🚀 Features

* 🔐 **Secure User Authentication**: Implemented with bcrypt for password hashing and JSON Web Tokens (JWT) for authorization.
* 🧾 **RESTful API**: Dedicated endpoints for seamless user and message management.
* 💬 **Real-time Messaging**: Powered by Socket.IO for instant message delivery without page refreshes.
* 🗂️ **MongoDB Database**: Efficiently stores all user data and chat messages.
* 🌐 **Integrated Frontend (React)**: A fully functional user interface for an intuitive chat experience (optional in this specific repository, primarily backend focused).
* 🧠 **Express Middleware**: Includes robust authentication checks and centralized error handling.
* 🌥️ **Image Upload Support**: Optional integration with Cloudinary for handling image uploads.

---

## 🛠️ Tech Stack

* **Frontend**: React (for the full application, but optional in this backend-focused repo)
* **Backend**: Node.js + Express
* **Database**: MongoDB + Mongoose
* **Authentication**: bcryptjs, JWT
* **Real-Time**: Socket.IO
* **Other Tools**: dotenv, cookie-parser, nodemon

---

## 📦 Installation

To get this project up and running on your local machine, follow these steps:

```Bash
# Clone the repository
git clone https://github.com/Monametsi-s/chat-app.git
cd chat-app
```

### Install backend dependencies

```Bash
npm install
```

### Install fronted dependencies

```Bash
cd frontend
npm install
```

 ```Bash cd ..```  To go back to the root if you ran the above

### ⚙️ Environment Setup

Create a .env file in the root directory of the project and add your environment variables:

```Bash

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 🧪 Run the App

From the root directory of your project:

```Bash
npm run dev
```

### For production (runs the compiled JavaScript)

```Bash
npm start
```

### 📡 Socket.IO Integration

Socket.IO is a JavaScript library that enables real-time, bi-directional communication between clients and servers over WebSockets or fallback transports like long polling. It’s commonly used for building features like chat apps, live notifications, real-time analytics, and multiplayer games.
Socket.IO is crucial for this app, enabling real-time communication between users. Messages are instantly broadcast to recipients, ensuring a smooth and responsive chat experience without the need to refresh the page.

## 📁 Folder Structure

```Bash
backend/
├── config/             # Database and Cloudinary configuration
├── controllers/        # Authentication and message logic
├── middleware/         # Authentication checks, error handlers
├── models/             # Mongoose schemas for data models
├── routes/             # API endpoints for authentication and chat
├── socket/             # Socket.IO setup and event handling
├── .env                # Environment variables
├── server.js           # Main entry point for the backend server
```

## 📄 License

This project is licensed under the MIT License.
