# Reservation System Manager for Hotels

## Table of Contents

1. [Introduction](#introduction)
2. [Technology Stack](#technology-stack)
3. [File Structure](#file-structure)
4. [Installation](#installation)
5. [Scripts](#scripts)

## Introduction

Reservation System Manager for Hotels is a comprehensive web application built on the MERN stack. Its purpose is to simplify hotel booking reservations.
This system allows users to efficiently reserve accommodations for specific dates and times while effortlessly managing their bookings.

## Technology Stack

- MongoDB: A NoSQL database used for storing and managing data.
- Express.js: A web application framework for Node.js used for building the backend.
- React.js: A JavaScript library for building user interfaces used for building the frontend.
- Node.js: A JavaScript runtime environment used for running server-side code.
- bcrypt: A library used for hashing passwords securely.

## File Structure
ReservationManagement_MERN/
├── backend/ # Backend folder
- `config/`: Contains configuration files.
- `connection/`: Holds files related to database connection setup.
- `controller/`: Houses controllers responsible for handling business logic.
- `error/`: Contains files related to error handling.
- `middleware/`: Includes middleware functions for request processing.
- `model/`: Contains data models representing database entities.
- `node_modules/`: Auto-generated folder for Node.js modules (ignored in version control).
- `response/`: Holds files related to API response handling.
- `route/`: Contains route definitions for the API endpoints.
- `app.js`: Entry point of the application.
- `package-lock.json`: Dependency lock file ensuring consistent installations.
- `package.json`: Metadata and dependencies of the project.
- `server.js`: Server configuration and startup script.
├── Frontend/ # Frontend folder
- `public/`: Contains public files such as HTML entry point.
  - `index.html`: HTML file serving as the entry point of the application.
- `src/`: Contains source code files.
  - `components/`: Houses React components.
  - `pages/`: Contains page components.
  - `services/`: Holds service files responsible for making API calls or handling other services.
  - `styles/`: Contains CSS stylesheets.
  - `App.jsx`: Main application component.
  - `index.jsx`: Entry point of the React application.
- `.eslintrc.cjs`: ESLint configuration file.
- `.gitignore`: Git ignore file specifying which files and directories to ignore in version control.
- `README.md`: Project README file.
- `package-lock.json`: Dependency lock file ensuring consistent installations.
- `package.json`: Metadata and dependencies of the project.
- `vite.config.js`: Configuration file for Vite.


## Installation


1. Clone the repository:

   ```bash
   git clone https://github.com/Ridwan6947/ReservationManagement_MERN.git
   ```
2. Backend
Navigate to the backend folder: 
  ```bash
  cd ReservationManagement_MERN/backend/
  ```

Install dependencies:
  ```bash
  npm install
  ```

Frontend
Navigate to the frontend folder: 
```bash
cd ../frontend/
```
Install dependencies: 
```bash
npm install
```

### Scripts

#### Backend

1. `npm start`: Start the backend server.
2. `npm run dev`: Start the backend server using Nodemon for automatic server restarts during development.

#### Frontend

1. `npm run dev`: Start the frontend development server.
2. `npm run build`: Build the frontend application for production.
3. `npm run lint`: Run ESLint for linting the frontend code.
4. `npm run preview`: Preview the built frontend application locally.
