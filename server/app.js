import express from "express";

// serve index.html from the ../dist folder
const app = express();
app.use(express.static("../dist"));

// start the server
const port = 3000;

// create a route to handle serving index.html

app.get("/", (req, res) => {
  res.sendFile("../dist/index.html");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
