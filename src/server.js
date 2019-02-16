const express = require('express')
const app = express()

// this little blob is to set some headers so you can get around
// CORS stuff, you'll be running the client on a different port
// than the rest api and chrome will complain
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// we're building our response temp data here
app.use((request, response, next) => {
  request.temp = 99.9
  request.date = new Date();
  next()
})

// we build the json and send it out as the reponse here
app.get('/', (request, response) => {
  console.log("send out temp: " + request.temp)
  response.json({
    temp: request.temp,
    date: request.date
  })
})

app.listen(3000)