# React Authentication System with PHP Backend

## Overview
This project is a simple authentication system built using **React** for the frontend and **PHP** for the backend. It utilizes **localStorage** for session management on the client side and JSON-based user data storage on the backend.

## Features
- User Registration
- User Login with Password Verification
- GUID-based User Identification
- LocalStorage-based State Management
- CORS-enabled Backend

## Technologies Used
### Frontend (React)
- React.js
- React-Bootstrap
- LocalStorage for session management

### Backend (PHP)
- PHP (Native, without frameworks)
- JSON-based file storage (`userData.php`)
- Ramsey UUID for GUID generation
- CORS-enabled authentication API


## Setup Instructions
### Backend Setup
1. Install PHP and Composer.
2. Navigate to the backend directory and install dependencies:
   ```sh
   composer install
   ```
3. Start a local PHP server (optional):
   ```sh
   php -S localhost:8000 -t backend/
   ```

### Frontend Setup
1. Install Node.js and npm.
2. Navigate to the frontend directory and install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   ```

## API Endpoints
### Authentication API (`auth.php`)
- **POST `api/auth.php`** (Handles user authentication)
    - Request Body:
      ```json
      {
        "action": "register",
        "email": "user@example.com",
        "password": "securepassword"
      }
      ```
    - Response:
      ```json
      {
        "success": true,
        "message": "User registered successfully"
      }
      ```

    - Request for login:
      ```json
      {
        "action": "login",
        "email": "user@example.com",
        "password": "securepassword"
      }
      ```
    - Response:
      ```json
      {
        "success": true,
        "message": "User logged in successfully",
        "user": {
          "guid": "some-guid-value",
          "email": "user@example.com"
        }
      }
      ```

## Security Considerations
- **Password Hashing**: User passwords are stored using `password_hash()` for security.
- **CORS Handling**: Allowed only for `http://localhost:3000` for local development.
- **Session Management**: LocalStorage is used for session persistence on the frontend.

## Future Improvements
- Migrate from JSON-based storage to a database (MySQL or SQLite).
- Implement JWT-based authentication for better security.
- Adding Update and Delete functionality.

---
**Author:** Nuruddin Tipu  
**Contact:** nuruddintipu.connect@gmail.com  

