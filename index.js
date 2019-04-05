const express = require("express");
const path = require("path");
const generatePassword = require("password-generator");
const request = require("request");
const router = express.Router();
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
app.use("/", router);

const client_id = "2b99e55f6fc04b1c82063242856ab33f";
const client_secret = "13dc08c45b9749fb80e80d945e0951c3";
var authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " +
      new Buffer.from(client_id + ":" + client_secret).toString("base64")
  },
  form: {
    grant_type: "client_credentials"
  },
  json: true
};
var token = "";
request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // use the access token to access the Spotify Web API
    token = body.access_token;
  }
});

// Put all API endpoints under '/api'
app.get("/api/spotify/search", function(req, res) {
  console.log(req.query.q);
  var options = {
    url:
      "https://api.spotify.com/v1/search?q=" +
      req.query.q +
      "&type=album%2Cartist%2Cplaylist%2Ctrack&limit=10",
    // url: "https://api.spotify.com/v1/search?q=frank%20ocean&type=track",
    headers: {
      Authorization: "Bearer " + token
    },
    json: true
  };
  request.get(options, (error, response, body) => {
    res.json(body);
  });
});

app.get("/api/spotify/tracks", function(req, res) {
  console.log(req.query.id);
  var options = {
    url: "https://api.spotify.com/v1/tracks/" + req.query.id,
    headers: {
      Authorization: "Bearer " + token
    },
    json: true
  };
  request.get(options, (error, response, body) => {
    res.json(body);
  });
});

app.get("/api/spotify/album", function(req, res) {
  console.log(req.query.id);
  var options = {
    url: "https://api.spotify.com/v1/albums/" + req.query.id + "/tracks",
    headers: {
      Authorization: "Bearer " + token
    },
    json: true
  };
  request.get(options, (error, response, body) => {
    res.json(body);
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Backend listening on ${port}`);
