const express = require('express');

// Create a server.
const server = express();

// Handle default request.
function firstMiddleware(req, res, next) {
    console.log('This is first middleware.')
    next()
}

function secondMiddleware(req, res, next) {
    console.log('This is second middleware.')
    next()
}

function globalMiddleware(req, res, next) {
    console.log('This is application-level middleware.')
    next()
}

// Executed for all requests
server.use(globalMiddleware)

// route-level middlewares: executed for send requests
server.get('/send', [firstMiddleware, secondMiddleware], (req, res) => {
  res.send('Hello World! This is Express server');
});

// Assign port.
server.listen(3200, () => {
  console.log('Server is listening on 3200');
});