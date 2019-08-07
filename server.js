const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets:
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to database

const mongoose = require("mongoose");
const mongoURL = process.env.MONGODB_URI|| "mongodb://localhost:27017/googlebooks"
mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

require("./routes/api-routes")(app);


app.listen(PORT, function() {
    console.log("Server is running on http://localhost:" + PORT);
});