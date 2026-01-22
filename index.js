const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🚀 Hello Subhpreet! Your Express server is running in WSL.");
});

app.get("/about", (req, res) => {
  res.send("🚀 Express server running with nodemon — auto reload!");

});

app.get("/api/profile", (req, res) => {
  res.json({
    name: "Subhpreet",
    program: "Computer Programming",
    tools: ["WSL", "VS Code", "Node", "Express"],
    status: "Building my portfolio 🚀"
  });
});

app.get("/skills", (req, res) => {
  res.json(["Java", "JavaScript", "Node", "Express", "Git", "WSL"]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

