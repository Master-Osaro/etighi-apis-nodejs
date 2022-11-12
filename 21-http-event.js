const http = require('http');

const server = http.createServer();

server.on('request', (req,res)=>{
    console.log('request event')
    res.end('Welcome to our home page')
}); 
server.listen(5000, ()=>{
    //success/error 
    console.log('Server listening on port: 5000....')
}); 