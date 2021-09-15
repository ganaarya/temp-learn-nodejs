// Event loops: is what allows node.js to perform non-blocking I/O operations - despite the fact that JavaScript is single-threaded

// const express = require('express');
// const { sleep } = require('sleep');
// const app = express();
// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/intense', (req, res) => {
//   sleep(5); // ARTIFICIAL CPU INTENSIVE
//   res.send('Hello Intense!');
// });
// app.listen(3000, () => console.log('Example app listening on port 3000!'));

/* eslint-disable no-console */
// const http = require('http');
// const { sleep } = require('sleep');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   sleep(5); // ARTIFICIAL CPU INTENSIVE
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// console.log('hello')



// const http = require('http')
// const { rest } = require('lodash')
// const server = http.createServer((req,res) => {
//   // console.log(req)

//   if(req.url === '/'){
//     res.statusCode = 200
//     res.setHeader('Content-Type','text/plain')
//     res.end('Welcome to our shop')
//   }
//   else if(req.url === '/about'){
//     res.end('About our shop')
//   }else{
//     res.end('404 - Oops! Page Not Found')
//   }
  
// })

// server.listen(8080, '127.0.0.1',() => {
//   console.log('first run')

//   setTimeout(() => {
//     console.log('second run')
//   }, 0)

//   console.log('third run')
  
// })

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//   res.writeHead(200,{'content-type':'text/html'})
//   fs.createReadStream('index.html').pipe(res)
// })

// server.listen(process.env.PORT || 5000)