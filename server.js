const express = require('express');
const path = require("path");
require('./core/db')
const dotenv = require('dotenv');
dotenv.config();

// Create express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get('/', async (req, res) => {
  res.json({ message: 'Books API, please sign in at /v1/auth/signin' });
});

//Before starting the server
const BooksRoute = require('./routes/books');
app.use('/v1/books', BooksRoute);
// Starting server

const AuthRoute = require("./routes/auth");
app.use('/v1/auth', AuthRoute);
// Profile
const ProfileRoute = require("./routes/profile");
app.use('/v1/user', ProfileRoute);

app.listen(
  3000,
  console.log('Listening on port ', 3000)
);