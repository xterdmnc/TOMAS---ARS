const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// // Hash password before saving to database
// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (!user.isModified('password')) return next();

//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(user.password, salt);
//   user.password = hash;
//   next();
// });

// // Method to compare passwords
// userSchema.methods.comparePassword = async function (candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// module.exports = mongoose.model('User', userSchema);


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
  // Hash password before saving to database
  userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  });
  
  module.exports = mongoose.model('User', userSchema);


//   // Register a new user
// exports.register = async (req, res) => {
//     const { firstName, lastName, email, password } = req.body;
  
//     try {
//       const existingUser = await User.findOne({ email });
  
//       if (existingUser) {
//         return res.status(400).json({ message: 'User already exists' });
//       }
  
//       const newUser = new User({ firstName, lastName, email, password });
//       await newUser.save();
  
//       res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Registration failed' });
//     }
//   };