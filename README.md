<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">Fullstack Web Application</a>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
      </ul>
    </li>
    <li>
      <a href="project-setup">Project Setup</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This project is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. The application offers user management, secure payment integration using Stripe, and various security features to ensure a smooth and safe user experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features
* User Authentication: Secure user login and registration.
* Payment Integration: Stripe payment gateway integration for real-time transactions.
* Admin Panel: Manage users and transactions.
* Security: Implemented security best practices including password hashing, and protection from NoSQL injections.
* Deployment: Deployed using Render for backend services and for frontend created a build and pasted the folder in backend.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Technologies Used
 Frontend:
 * React.js: Used to build the user interface
 * Axios: For handling HTTP requests between frontend and backend.
   
 Backend:
 * Node.js: Runtime environment for executing JavaScript code on the server side.
 * Express.js: Web framework for building RESTful APIs.
 * MongoDB: NoSQL database for storing user and transaction data.
   
Security:
* bcrypt: For hashing and salting passwords.

Payment Gateway:
* Stripe: For handling payments and transactions, including webhooks for real-time updates.
Deployment:

Backend: Hosted on Render.

## Project Setup
### Prerequisites
Ensure that you have the following tools installed on your local machine:

Node.js (v14+)
MongoDB (local or cloud-based)
Stripe Account (for payment gateway)

## Environment Variables
Create a .env file in the root of the project and add the following variables:

   ```js
   DB_String = "mongodb+srv://shravya:rqK0tfgqftomdN6G@cluster0.nyir3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   JWT_SECRET = RANDONKEY
   STRIPE_KEY=sk_test_51Q9mORFkkR8Y8oJDN1LaR9AAix5YtqECt6Mzt7s3uUxXe55yr7SojArgt7z5iIL2FYuy5ZxlELFGNbvVcXUTBdNF00EfAHZRKX
   ```

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ShravyaSK/FullStackProject.git
   ```
2. Install dependencies for both backend and frontend:
   ```sh
   npm install  
   ```
3. Start the development server:
   ```js
   npm run start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request










