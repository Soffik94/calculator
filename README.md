This project is a simple calculator web application with a backend server, designed to store calculation history. The application is built with React for the frontend and Express with MongoDB for the backend, providing a full-stack setup that allows users to perform calculations and view their past results.

Features
- Basic Calculator: Perform basic mathematical operations.
- Calculation History: View previously completed calculations with timestamps.
- Persistent Storage: Calculation history is stored in a MongoDB database.
- REST API: A RESTful API built with Express to handle calculation storage and retrieval.
- Separation of Frontend and Backend: The frontend and backend are separated into different modules for easier development and scaling.

Technologies Used
- Frontend: React
- Backend: Node.js, Express.js
- Database: MongoDB (using Mongoose for data modeling)
- Environment Variables: Managed with dotenv for secure and flexible configuration
- CORS: Configured for cross-origin requests to enable communication between frontend and backend
