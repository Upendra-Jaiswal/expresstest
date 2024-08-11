import express from "express";
const PORT = 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("sever is running");
});

app.listen(PORT, (req, res) => {
  console.log(`server is running at ${PORT}`);
});
