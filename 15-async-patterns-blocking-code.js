const http = require('http');
const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end('Home Page')
    }
    if (req.url === '/about') {
        //BLOCKING CODE!!!
        for (let index = 0; index < 1000; index++) {
            for (let index2 = 0; index2 < 1000; index2++) {
                console.log(`${index} ${index2}`)
            }
        }
        res.end('About Page')
    }
    if (req.url === '/error') {
        res.end('Error Page')
    }
})

server.listen(5000, ()=>{
    console.log('Server Listening on port 5000...')
})