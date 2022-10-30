const express = require("express");
const { cats } = require("./data");
const cors = require("cors");

const app = express();

var allowedOrigins = ['http://localhost:3000',
  'http://localhost:44330'];

app.use(cors({
  credentials: true,
  origin: function (origin, callback) {
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.get("/cats", async (req, res) => {
  return res.json(cats);
});

app.listen(4000, () => {
  console.log("listening");
});
