const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://fikram:vuPjas-zumcot-sisjy6@react-register-login-lo.chhxfs6.mongodb.net/?retryWrites=true&w=majority',
  () => {
    console.log('Database is connected');
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(4000, () => {
  console.log('Server is up and running');
});

//User Schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//mongoose schema model

const User = new mongoose.model('User', userSchema);

//Routes

app.post('/login', (req, res) => {
  //first code just to test    res.send('My api login');
  //console.log(req.body);
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: 'Login Successful', user: user });
      } else {
        res.send({ message: 'Wrong password' });
      }
    } else {
      res.send({ message: 'User do not exist please register' });
    }
  });
});

app.post('/register', (req, res) => {
  //first code just to test      res.send('My register');
  //console.log(req.body);
  const { name, email, password } = req.body;
  //this function findOne will check if this
  //email already exist in out data base or
  //not in case it is then return error if not t
  //he create new user
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'Email id already exists' });
    } else {
      //mongodDB schema decleration down here
      const user = new User({
        name: name,
        email: email,
        password: password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: 'Registration Succesfull' });
        }
      });
    }
  });
});
