const http = require('http')

const server = http.createServer((req,res) => {
  // console.log(req)

  if(req.url === '/'){
    res.end('Welcome to our shop')
  }
  else if(req.url === '/about'){
    res.end('About our shop')
  }else{
    res.end('404 - Oops! Page Not Found')
  }
  
})

server.listen(8080)