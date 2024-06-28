const express = require('express')

// Create a server
const server = express()

// Handle default request
server.get('/', (req, res) => {
    res.end('Welcome to Express server.')
})

server.listen(3100, () => {
    console.log('Server is listening on 3100')
})