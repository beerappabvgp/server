import express from "express";

const app = express();

const port = 5000;

// creating a get route

app.get("/", (request, response) => {
//   console.log(request, response);
  console.log("request has been received ... ", request.url);
  response.send("Hi there!!!");
});

app.listen(5000);


// request is js object - collection of key value pairs 

// response is also a js object, it consists of bunch of key value pairs 