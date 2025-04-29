Movie Ticket Booking Web Application
Overview
This is a full-featured Movie Ticket Booking Web Application that allows users to:

Sign Up and Login.

Browse and book movie tickets.

Select seats from a seat selection grid.

Make payments for tickets.

Receive booking confirmation via email.

Admin Dashboard to manage movies and showtimes.

The application uses Node.js, Express, MongoDB, and Mongoose for backend development. The frontend is created using HTML, CSS, JavaScript with a vibrant and colorful UI.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Table of Contents
Technologies Used

Installation

Configuration

Running the Application

MongoDB Setup

Frontend Setup

Email Setup

Deployment

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Technologies Used
Frontend: HTML, CSS, JavaScript, Bootstrap

Backend: Node.js, Express.js

Database: MongoDB (local or MongoDB Atlas)

Email Service: Nodemailer

Payment Gateway: Stripe (or you can integrate another payment gateway)

Authentication: Passport.js (for user authentication)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Installation
Clone the repository to your local machine:

git clone https://github.com/raga-aravind/movie-ticket-booking.git
Navigate into your project folder:

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
cd movie-ticket-booking
Install dependencies: Make sure you have Node.js installed. Run the following command to install all required dependencies:

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
npm install
Configuration
Create a .env file in the root directory of the project to store your environment variables.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Example .env file:

MONGO_URI=mongodb://localhost:27017/movie-booking  # Local MongoDB URI or MongoDB Atlas URI
SESSION_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-secret-key
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
MongoDB URI:

If you're using MongoDB Atlas, you can replace the local MONGO_URI with the URI from your MongoDB Atlas dashboard.

If you're using local MongoDB, make sure MongoDB is running on your system.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Running the Application
Start the MongoDB server (if using local MongoDB): Open a terminal and run:

mongod
Run the Node.js server: In the project folder, run the following command to start the server:
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
npm start
or

node server.js
Open your browser and visit:

arduino
Copy
Edit
http://localhost:5000
You should be able to access the application. The Login page should appear, and you can proceed with the sign up and movie booking process.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
MongoDB Setup
Local MongoDB:

Download and install MongoDB from here.

Start MongoDB by running:

mongod
MongoDB Atlas:

Create a MongoDB Atlas account and create a cluster: MongoDB Atlas.

Set up your connection string and replace the MONGO_URI in the .env file.

Frontend Setup
The Frontend files are located in the frontend/ folder.

These files are static HTML, CSS, and JavaScript files.

To view the pages, you can open any of the HTML files directly in the browser or use the "Live Server" extension in VS Code.

Email Setup
Configure Nodemailer to send confirmation emails upon ticket booking.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
In the .env file, configure your email credentials:

env
Copy
Edit
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
Use a mail service like Gmail, SendGrid, or any other SMTP provider to send the emails.

If you're using Gmail, you may need to allow Less secure apps or use OAuth2 for enhanced security.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Deployment
Frontend Deployment:

The frontend can be deployed using platforms like Netlify or Vercel for static site hosting.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Backend Deployment:

The backend can be deployed to platforms like Heroku, Render, or AWS.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Example of deploying to Heroku:

heroku create movie-ticket-booking
git push heroku main
