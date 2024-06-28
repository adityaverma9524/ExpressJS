const express = require("express")

// Server
const server = express()

server.get('/', (req, res)=>{ 
    res.send('Welcome to express.')
})

// Static files are present in public folder & can be accessed directly.
server.use(express.static('public'))

server.listen(3300)
console.log('Server is listening on 3300.')