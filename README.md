#Fullstack Web Application
This project is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. The application offers user management, secure payment integration using Stripe, and various security features to ensure a smooth and safe user experience.

##Features
User Authentication: Secure user login and registration.
Payment Integration: Stripe payment gateway integration for real-time transactions.
Admin Panel: Manage users and transactions.
Security: Implemented security best practices including password hashing, API rate limiting, and protection from NoSQL injections.
Deployment: Deployed using Render for backend services and Netlify for frontend hosting.

##Technologies Used
Frontend:

React.js: Used to build the user interface.
Axios: For handling HTTP requests between frontend and backend.
Backend:

Node.js: Runtime environment for executing JavaScript code on the server side.
Express.js: Web framework for building RESTful APIs.
MongoDB: NoSQL database for storing user and transaction data.
Security:

bcrypt: For hashing and salting passwords.
express-rate-limiter: To prevent brute force attacks.
helmet: To secure HTTP headers.
express-mongo-sanitize: To protect against NoSQL injections.
Payment Gateway:

Stripe: For handling payments and transactions, including webhooks for real-time updates.
Deployment:

Frontend: Hosted on Netlify.
Backend: Hosted on Render.

##Project Setup
Prerequisites
Ensure that you have the following tools installed on your local machine:

Node.js (v14+)
MongoDB (local or cloud-based)
Stripe Account (for payment gateway)

##Environment Variables

Create a .env file in the root of the project and add the following variables:
DB_String = "mongodb+srv://shravya:rqK0tfgqftomdN6G@cluster0.nyir3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET = RANDONKEY
STRIPE_KEY=sk_test_51Q9mORFkkR8Y8oJDN1LaR9AAix5YtqECt6Mzt7s3uUxXe55yr7SojArgt7z5iIL2FYuy5ZxlELFGNbvVcXUTBdNF00EfAHZRKX

##Installation

1. Clone the repository:
2. Install dependencies for both backend and frontend:
3. Start the development server
   
##Running the Application
The frontend will run on http://localhost:3000.
The backend will run on http://localhost:5000.

##Security Features
The application implements the following security measures:

Password Hashing: Passwords are securely hashed using bcrypt.
Rate Limiting: API rate limiting is enforced to prevent brute force attacks using express-rate-limiter.
Data Sanitization: Incoming requests are sanitized to prevent NoSQL injection attacks.
HTTP Security Headers: helmet is used to secure HTTP headers.

##Payment Integration
Stripe: The application integrates Stripe for payment processing. It handles the payment flow securely, including webhook configuration for real-time payment status updates.

##Deployment
The application is deployed as follows:

Frontend: Hosted on Netlify.
Backend: Hosted on Render.
For local development, ensure that the CORS configurations are correctly set up between the frontend and backend.

##License
This project is licensed under the MIT License - see the LICENSE file for details.

##Acknowledgments
Special thanks to Scaler Neovarsity and my mentor, Naman Bhalla, for guiding me throughout the project.
