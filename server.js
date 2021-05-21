require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.get("/pdf", async function (req, res, next) {
  res.sendFile(path.join(__dirname, "./sqlDesign.pdf"));
});

app.use((req, res) => {
  (process.env.NODE_ENV === 'production') ? res.sendFile(path.join(__dirname, "./client/build/index.html")) : res.sendFile(path.join(__dirname, './client/public/index.html'));
});

const startServer = async () => {

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
  });
};

startServer();