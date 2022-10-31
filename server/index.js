const express = require("express");
const { cats, users, posts, products } = require("./data");
const cors = require("cors");
const bodyParser = require('body-parser');
const { error } = require("console");

const app = express();

var allowedOrigins = ['http://localhost:3000',
  'http://localhost:44330'];

app.use(express.json());
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

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get("/cats", async (req, res) => {
  return res.json(cats);
});

app.get("/users", async (req, res) => {
  return res.json(users);
});

app.get("/posts", async (req, res) => {
  return res.json(posts);
});
app.post("/posts", async (req, res) => {
  const _post = { ...req.body }
  _post.id = (posts.length > 0 ? (+posts[posts.length - 1].id + 1) : 1).toString()
  posts.push(_post)
  return res.json(_post);
});
app.delete("/posts", async (req, res) => {
  const { id } = req.query
  const index = posts.findIndex(p => p.id === id)
  if (index === -1) {
    return res.sendStatus(404);
  }
  posts.splice(index, 1)
  return res.json(id);
});

app.get("/products", async (req, res) => {
  return res.json(products);
});

app.listen(4000, () => {
  console.log("listening");
});
