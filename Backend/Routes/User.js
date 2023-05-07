const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.get("/alluser", async (req, res) => {
  // res.setHeader("Content-Type", "application/json");
    // res.send("Get users");
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// router.get("/:id", getUser, (req, res) => {
//   res.json(res.user);
// });

// async function getUser(req, res, next) {
//   let user;

//   try {
//     user = await User.findById(req.params.id);
//     if (user == null) {
//       return res.status(404).json({ message: "Cannot find user" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.user = user;
//   next();
// }

// // router.post("/", async (req, res) => {
// //   const user = new User({
// //     name: req.body.name,
// //     email: req.body.email,
// //     password: req.body.password,
// //   });

// //   try {
// //     const newUser = await user.save();
// //     res.status(201).json(newUser);
// //   } catch (err) {
// //     res.status(400).json({ message: err.message });
// //   }
// // });

// router.post('/register', async (req, res) => {
//   try {
//     const { name ,email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const token = jwt.sign({ email }, 'secret');
//     res.json({ token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred');
//   }
// });

// router.patch("/:id", getUser, async (req, res) => {
//   if (req.body.name != null) {
//     res.user.name = req.body.name;
//   }
//   if (req.body.email != null) {
//     res.user.email = req.body.email;
//   }
//   if (req.body.password != null) {
//     res.user.password = req.body.password;
//   }

//   try {
//     const updatedUser = await res.user.save();
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// router.delete("/:id", getUser, async (req, res) => {
//   try {
//     await res.user.deleteOne();
//     res.json({ message: "User deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

module.exports = router;
