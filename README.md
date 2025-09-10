# 🏕️ Wanderlust
Wanderlust is a full-stack web application inspired by Airbnb.  
It allows users to **browse, create, edit, and delete property listings**, leave reviews, and view listing locations on an interactive map.

---

# Live Demo
You can access the live version of the project here: [**WanderLust Live Demo**](https://wanderlust-s1ei.onrender.com/listings)

## 🚀 Features
- 🌍 Browse all property listings
- 📝 Add, update, and delete listings (CRUD operations)
- 🔑 User authentication (register/login/logout)
- 📸 Image upload with Cloudinary
- ⭐ Review system with ratings
- 🗺️ Interactive map for each listing (powered by Mapbox)
- 🎨 Responsive UI with Bootstrap

---

## 🛠️ Tech Stack
- **Frontend:** EJS, HTML, CSS, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** Passport.js (Local strategy)
- **Maps:** Mapbox GL JS
- **Other Tools:** Multer (file uploads), Cloudinary (image hosting)

---

## 📂 Project Structure
Wanderlust/
│
├── models/ # Mongoose schemas (User, Listing, Review)
├── routes/ # Express routes
├── controllers/ # Controller logic
├── views/ # EJS templates (listings, reviews, auth, maps)
├── public/ # Static assets (CSS, JS, images)
├── app.js # Main entry point
└── README.md # Project documentation
