const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4200;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Using these middleware functions allows your Express.js application to handle requests with URL-encoded or JSON data,

const users = [
  { id: 1, username: "admin", password: "password" },
  { id: 2, username: "user", password: "123456" },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: "Logout successful" });
});

app.get("/check-auth", (req, res) => {
  const isAuthenticated = /* Check if the user is authenticated */ false;

  if (isAuthenticated) {
    res.status(200).json({ authenticated: true });
  } else {
    res.status(401).json({ authenticated: false });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
