# Todo Application

This simple todo application allows users to add, edit, delete tasks, and manage their profile information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

```bash
https://github.com/ferhatkplnn/react-firebase-post-app.git
cd react-firebase-post-app
```

2. Install the required dependencies:

```bash
npm install
```

3. Configure Firebase settings:
   -Open the src/firebase.js file and update it with your Firebase project settings.

4. Start the application:

```bash
npm run dev
```

## Notes

- Before configuring Firebase, create a new project on the Firebase Console and enable the necessary services.

- Firebase Authentication and Firestore are used. Create Firestore collections to store users and posts.

6. View the application by going to `http://localhost:3000` in your browser.

## Usage

- Register: Sign up for the application by providing a username, email, and password.
- Log in: Log in with your registered username and password.
- Add task: Add a new task with a title and content.
- Edit/Delete tasks: Modify or delete the added tasks.
- Profile management: Upload a profile picture, change your password.

## Features

- User registration and login
- Add, edit, and delete tasks
- Change password
- Upload profile picture
- Responsive design

## Technologies

- Tailwind CSS
- JavaScript
- Firebase
- React
- Redux

## Screenshots

![Home Page](screenshots/home.png)
![Profile Page](screenshots/profile.png)
![Edit Task](screenshots/edit-task.png)
