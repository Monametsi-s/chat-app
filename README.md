# MERN Chat App 💬

Dive into real-time conversations with the **MERN Chat App** – a robust, full-stack application leveraging the power of **MongoDB, Express, React, and Node.js**. This project features secure **user authentication** with bcrypt, **JWT-based authorization**, and **real-time messaging** using **Socket.IO**.

---

## 🚀 Features

* 🔐 **Secure User Authentication**: Implemented with bcrypt for password hashing and JSON Web Tokens (JWT) for authorization.
* 🧾 **RESTful API**: Dedicated endpoints for seamless user and message management.
* 💬 **Real-time Messaging**: Powered by Socket.IO for instant message delivery without page refreshes.
* 🗂️ **MongoDB Database**: Efficiently stores all user data and chat messages.
* 🌐 **Integrated Frontend (React + Tailwind CSS + DaisyUI)**: Modern, responsive UI for chat, authentication, profile management, and settings.
* 🧠 **Express Middleware**: Includes robust authentication checks and centralized error handling.
* 🌥️ **Image Upload Support**: Optional integration with Cloudinary for handling image uploads.
* 🎨 **Theme Switching**: Light/dark mode and DaisyUI themes.
* 🔔 **Toast Notifications**: Real-time feedback for user actions.
* 🧩 **State Management**: Zustand for global state (auth, theme, socket).
* ⚡ **Frontend Routing**: React Router for SPA navigation.

---

## 🛠️ Tech Stack

* **Frontend**: React, Tailwind CSS, DaisyUI, Zustand, React Router, react-hot-toast, lucide-react
* **Backend**: Node.js + Express
* **Database**: MongoDB + Mongoose
* **Authentication**: bcryptjs, JWT
* **Real-Time**: Socket.IO
* **Other Tools**: dotenv, cookie-parser, nodemon

---

## 📦 Installation

To get this project up and running on your local machine, follow these steps:

```bash
# Clone the repository
git clone https://github.com/Monametsi-s/chat-app.git
cd chat-app
```

### Install backend dependencies

```bash
npm install
```

### Install frontend dependencies

```bash
cd frontend
npm install
```

```bash
cd .. # To go back to the root if you ran the above
```

### ⚙️ Environment Setup

Create a .env file in the root directory of the project and add your environment variables:

```bash
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 🧪 Run the App

From the root directory of your project:

```bash
npm run dev
```

### Run the frontend (in a separate terminal):

```bash
cd frontend
npm run dev
```

### For production (runs the compiled JavaScript)

```bash
npm start
```

---

## 📡 Socket.IO Integration

Socket.IO is a JavaScript library that enables real-time, bi-directional communication between clients and servers over WebSockets or fallback transports like long polling. It’s commonly used for building features like chat apps, live notifications, real-time analytics, and multiplayer games.
Socket.IO is crucial for this app, enabling real-time communication between users. Messages are instantly broadcast to recipients, ensuring a smooth and responsive chat experience without the need to refresh the page.

---

## 📁 Folder Structure

```bash
chat-app/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Authentication and message logic
│   │   ├── lib/              # Utilities, DB, Cloudinary, JWT
│   │   ├── middleware/       # Authentication checks, error handlers
│   │   ├── models/           # Mongoose schemas for data models
│   │   ├── routes/           # API endpoints for authentication and chat
│   │   ├── socket.js         # Socket.IO setup and event handling
│   │   ├── index.js          # Main entry point for the backend server
│   ├── .env                  # Environment variables
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI components (Navbar, Chat, etc.)
│   │   ├── pages/            # Page components (Home, Login, Signup, Profile, Settings)
│   │   ├── store/            # Zustand stores (auth, theme, socket)
│   │   ├── lib/              # Axios instance, utilities
│   │   ├── App.jsx           # Main App component
│   │   ├── index.css         # Tailwind CSS entry
│   │   ├── main.jsx          # React entry point
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   ├── postcss.config.js     # PostCSS configuration
│   ├── index.html            # HTML entry point
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

---

## 📄 License

This project is licensed under the MIT License
