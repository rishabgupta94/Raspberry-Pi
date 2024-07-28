const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Node.js API, after changes");
});

app.listen(port, () => {
  console.log(`Node.js API listening at http://localhost:${port}`);
});
