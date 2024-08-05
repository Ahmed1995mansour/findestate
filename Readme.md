# Car Deals and Trade-In Application

Live App Demo: https://cardeals.onrender.com

## Credentials:

### As Admin

username: admin@cardeals.com &emsp; password: admin@123

### As User

username: user@cardeals.com &emsp; password: user@123

## Introduction

Welcome to the Find Estate Application project! This project is aimed at building a fullstack application using React for front-end and Nodejs for back-end that allows users to explore detailed information about Property listings.

## Features:


### Advanced Authentication: Implement JWT, Firebase, and Google OAuth for secure and seamless user access.

User can signup/signin using email and password or sigining with google.
Admin user can add a new listing, view all trades requests from users and make an action to that request
A User can explore all listings , search for specific listing name , order the search results , view a detailed page about a listing.

### Real-world CRUD Operations: Create, read, update, and delete property listings using MongoDB.

Users can view detailed information about a specific car listing.

### User-friendly Features:

Enhance the user experience with image uploads, property listing management, and more.

### Advanced Search Functionality:

Implement cutting-edge search features to help users find what they're looking for.

### Database:

The project includes a mechanism to store and retrieve data from MongoDB.

### Dedicated API Server:

A dedicated API server implemented in Node.js is added to handle data requests and responses.



## Getting Started

Clone the repository to your local machine.

### Step 1: Clone the repository

git clone https://github.com/Ahmed1995mansour/cardeals.git
cd cardeals

### Step 2: Create Your MongoDB Account and Database Cluster

Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.

Create a new database or cluster by following the instructions provided in the MongoDB documentation. Remember to note down the "Connect to your application URI" for the database, as you will need it later. Also, make sure to change <password> with your own password.

add your current IP address to the MongoDB database's IP whitelist to allow connections (this is needed whenever your ip changes)

Create your own project on firebase and get your API_KEY, configure firebase storage as following:
bash
copy code
rules_version = '2';

```
// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
// /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
service firebase.storage {
match /b/{bucket}/o {
match /{allPaths=\*_} {
allow read;
allow write: if request.resource.size < 2 _ 1024 _ 1024 && request.resource.contentType.matches('image/._')
}
}
}
```

### Step 3: Edit the Environment File

Check a file named .env in the /server directory and /client directory

This file will store environment variables for the project to run.

### Step 4: Update MongoDB URI

In the .env file in server directory

```
PORT=5010
MONGODB_URL = Your MongoDB URI
JWT_SECRET = Your Own Secret
```

In the .env in client directory

```
VITE_FIREBASE_API_KEY = Firebase API_KEY
```

### Step 5: Install Backend Dependencies

In your terminal, navigate to the root directory

then run the following command to install the backend dependencies:

```
npm install
```

This command will install all the required packages specified in the package.json file in the root directory.

navigate into /client directory and run this command

```
npm install
```

### Step 6: Run the project

In the root directory , run the following command to start the backend server:

```
npm run dev
```

This command will start the backend server and the client server, and it will listen for incoming requests.

```
npm run dev
```

Access the application in your browser.

Try to signup a user and modify it's role from db to admin.
register another user.

Have Fun.
