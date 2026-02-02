// const users = [
//   { id: 1, name: "Arjun", role: "student" },
//   { id: 2, name: "Priyesha", role: "mentor" }
// ];

// const express = require("express");

// const app = express();
// app.get("/users", (req, res) => {
//   res.status(200).json(users);
// });

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Rutvi Parakhiya");
});

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" }
];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.listen(200, () => {
  console.log("Server started on port 200");
});

console.log("Rutvi Parakhiya");
