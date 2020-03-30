const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const path = __dirname + '/views/';

const day = require('./routes/api/day');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/day', day);

router.use((req, res, next) => {
  console.log("/" + req.method);
  next();
});

router.get("/", (req, res) => {
  res.sendFile(path + "index.html");
});

app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`)); 