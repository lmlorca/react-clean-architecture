const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/posts", (req, res) => {
  res.json([{ id: 1, title: "some post", body: "hola ipsum dolor sit" }]);
});

app.listen((port = 3000), () => {
  console.log(`Server started at http://localhost:${port}`);
});
