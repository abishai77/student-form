Student Registration Form with MongoDB

This project is a Student Registration Form developed using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.
The application allows users to enter student details through a web form and store the data in a MongoDB database.

Features
Student registration form
Input fields for:
Name
Age
Course
Gender
Phone Number
Form validation using JavaScript
Data stored in MongoDB database
Backend API using Express.js
Stylish UI using CSS
Reset form after successful submission
Technologies Used
HTML
CSS
JavaScript
Node.js
Express.js
MongoDB
MongoDB Compass
Project Structure
student-form/
│
├── table.html        # Frontend form
├── style.css         # Styling file
├── server.js         # Backend server
├── package.json
└── node_modules/
How It Works
Frontend
User enters student details in the form.
JavaScript collects the form data.
fetch() method sends the data to the backend server.
Backend
Express server receives the data using POST request.
MongoDB client connects to the database.
Data is inserted into the students collection.
MongoDB Database
Database Name:
studentdb
Collection Name:
students
Abishai V
