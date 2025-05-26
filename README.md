# Wanderlust
Wanderlust is an Airbnb-inspired web application developed using Node.js, Express.js, EJS, and MongoDB.It allows users to search for accommodations, list properties and review the properties. there is no booking functionality implimented yet

## Live Demo

A live demo of **Wanderlust** can be accessed [here](https://wanderlust-s1ei.onrender.com/listings).

## Features

- **Search Functionality**: Users can search for accommodations based on various criteria such as location, dates, and amenities.
- **Category-Based Listing**: Accommodations are categorized for easy browsing and filtering.
- **User Authentication**: Secure user authentication system ensures that only registered users can access certain features like listing properties and booking accommodations.
- **CRUD Operations**: MongoDB and Mongoose are used for efficient CRUD (Create, Read, Update, Delete) operations via API endpoints.
- **Server-Side Validation**: Joi library is integrated for server-side validation to ensure data schema.
- **Server-Side Rendering**: EJS is used for rendering the page server-side and sending it to the user.
- **Image Storage**: Cloudinary API is utilized for image storage, allowing users to upload images of their properties.
- **Responsive Design**: The application is fully responsive, and well suited for mobile view too.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript)
- MongoDB
- Bootstrap
- HTML
- CSS
- JavaScript

## Other Dependencies

- Cloudainary
- Connect-flash
- dotenv
- joi
- method-override
- multer
- nodemon
- passport
  
## Installation

To run Wandelust locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up your MongoDB Atlas cluster and obtain your connection string.
5. Create a `.env` file in the root directory and add your MongoDB Atlas connection string and Cloudinary API credentials.
   it should include: CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET, ATLASDB_URL and a SECRET (to encrypt passwords).
7. Run the application using `node app.js`. (make sure you are in project directory)
8. Access the application in your web browser at `http://localhost:8000`.

## Screenshots

![image](https://github.com/user-attachments/assets/07ff67d6-e273-4ac3-a36a-83a59fe4bcb8)
(![image](https://github.com/user-attachments/assets/8f30f2dc-5e3b-41ff-b561-d9a038bb4f7a)
![image](https://github.com/user-attachments/assets/3c991e7c-f3b8-45d4-b0e0-f92b5783f5b0)
![image](https://github.com/user-attachments/assets/2050877b-d736-44d7-8282-2618a7dbf370)
![image](https://github.com/user-attachments/assets/9336f864-c912-42d9-8db8-acae8cf065a9)



## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
