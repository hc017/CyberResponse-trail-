#  CyberSoochna- A resilient Framework for collecting and responding to digital crimes and frauds
Welcome to the CyberSoochna! This project is a ReactJS and Firebase based incident management solution used for reporting, tracking and automatically assigning cases and categorizing them for the users. Whether you're a business owner interested in our platform, or just a curious user, this README will guide you through the essential details of our project. 
## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [About](#about)
- [Keywords](#keywords)
## Features
The CyberSoochna Incident Response Portal includes:

- **Issue Reporting**: Users can report issues with detailed descriptions.
- **Automatic Categorization**: Issues are automatically categorized based on predefined rules or algorithms.
- **User Authentication**: Secure registration and login process for users.
- **Issue Tracking**: Users can track the status of their reported issues in real-time.
- **Admin Panel**: Admins can view, assign, and manage reported issues through a comprehensive dashboard.
- **Notifications**: Real-time notifications for users and admins on issue updates.
- **Responsive Design**: A mobile-friendly user interface for a seamless experience across all devices.

## Technologies Used
- **React**: A popular JavaScript library for building user interfaces.
- **React Router**: For handling navigation within the application. The react router we used (react-router-dom) is v6. 
- **Firebase**: A comprehensive platform for building web applications.
  - **Firestore**: A NoSQL database for storing and syncing data in real-time.
  - **Functions**: Serverless functions for backend logic.
  - **Authentication**: Secure user authentication and authorization.
- **Redux**: A state management library for predictable application state.
- **Tailwind CSS**: For styling the user interface.
- **BootStrap**: For responsive development. 

## Installation
### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **Yarn**
- **Git**
  
To get started with the CyberSoochna Incident Response Portal, follow these steps:

1. Make a directory where you want to clone this repository to your local machine using Git.

   ```bash
   git clone https://github.com/hc017/CyberSoochna.git

2. Open the project in any IDE or editor and navigate to cloned repository directory.
   ```bash
   cd cybersoochna
   
3. Install dependencies from the terminal.
   ```bash
   npm install
   OR
   ```bash
   yarn install
   
4. Create a .env file or rename .env.example to .env and add your own configuration.

5. Now you can run the project, start the development server.
   ```bash
   npm start
    OR
   ```bash
   yarn start
   
6. Access the application in your web browser at `http://localhost:3000`.

Additional Steps for Firebase Configuration
Since CyberSoochna uses Firebase for its backend services, you may need to set up Firebase services:

1. Firebase Project Setup
Create a new project on the Firebase Console.

2. Add Firebase SDK
Configure your Firebase project by adding the Firebase SDK to your project. Update your .env file with your Firebase project credentials.

3. Deploy Firebase Functions (Optional)
If you have Firebase functions that need to be deployed, navigate to the functions directory and run the following commands:
   ```bash
   cd functions
   npm install
   firebase deploy --only functions

## Usage
Configuration of your firebase account. Login to your google account and create a new firebase project [click here](https://console.firebase.google.com/u/0/)
Create a FirebaseConfig.js file and add the following variables:
```bash
// SAMPLE CONFIG, you should put the actual config details found on your project settings

const firebaseConfig = {
  apiKey: "AIzaSyD5kgkbKhHVVa9MmJwpD7zNZP5p-T-Huxw",
  authDomain: "yourauthdomin.firebaseapp.com",
  databaseURL: "yourdburl.firebasedatabase.app/",
  projectId: "yourproject-id",
  storageBucket: "yourstoragebucket.appspot.com",
  messagingSenderId: "370994734512",
  appId: "1:370994734512:web:3e82c1a31746693779e275",
  measurementId: "G-STG4B5C20Z"
};

After setting up necessary configuration, create a Realtime Database and start the development server.

## License

This project is licensed under the Apache License 2.0. You can freely use, modify, and distribute this software as per the terms of the license.
For more detailed information, you can refer to the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).
