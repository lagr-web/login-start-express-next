//routes.js

import express from "express";
import morgan from 'morgan';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import Data from "./models/Data.js";
import User from "./models/User.js";
import bcrypt from "bcrypt";

dotenv.config();

const router = express.Router();


router.use(express.json());

router.get("/test", (request, response) => {
  response.send("Hello, World root!");
});

router.get("/data", (request, response) => {
  response.send("Hello, World data!");
});

router.get("/getOne", (request, response) => {
  response.send("Hello, Get One!");
});

router.get("/getAlldata", async (request, response) => {

  try {
    const cards = await Data.find();
    response.json(cards);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Save the user's ID in the session
  req.session.userId = user._id;

  console.log(req.session);

  res.json({ message: 'Login successful' });
   
});

router.post('/register', async (req, res) => {

  try {

    const { email, password } = req.body; //request our form input

       // Check if email and password are provided
       if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
    console.error('User registration error:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

export default router;
