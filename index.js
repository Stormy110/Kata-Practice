const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.get('/hello', (req,res)=>{
    res.send('Hello, you');
});

app.get('/hello/:name', (req,res)=>{
    const {name} = req.params;
    res.send(`Hello ${name}`)
});

server.listen(3000, ()=>{
    console.log('Running on port 3000')
})