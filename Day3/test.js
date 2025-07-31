const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// In-memory user list
let users = [
  { id: 1, name: "Shameem" },
  { id: 2, name: "Vishnu" }
];

// GET all users

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// POST new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser); // 201 = Created
});

// PUT (replace) user by ID
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).send('User not found');
  }

  users[index] = {
    id: id,
    name: req.body.name
  };

  res.status(200).json(users[index]);
});

// PATCH (update part of) user by ID
app.patch('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).send('User not found');
  }

  if (req.body.name) {
    user.name = req.body.name;
  }

  res.status(200).json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).send('User not found');
  }

  users.splice(index, 1);
  res.status(204).send(); // 204 = No Content
});

// Start server
app.listen(port);