const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if(request.url === '/cars') {
        fs.readFile('./views/index.html', 'utf8', (errors, contents) =>{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats") {
         fs.readFile('./views/cats.html', 'utf8', (errors, contents) =>{
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/new/cars") {
        fs.readFile('./views/new_cars.html', 'utf8', (errors, contents) =>{
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        })
   }
   else if(request.url === "/images/bugatti.png"){
    fs.readFile("./images/bugatti.png", (errors, contents)=>{
        response.writeHead(200, {"Content-Type": "image/png"});
            response.write(contents);
            response.end();
        });  
    
   }
   else if(request.url === "/images/porshe.png"){
    fs.readFile("./images/porshe.png", (errors, contents)=>{
        response.writeHead(200, {"Content-Type": "image/png"});
            response.write(contents);
            response.end();
        });  
    
   }
   else if(request.url === "/images/black_cat.png"){
    fs.readFile("./images/black_cat.png", (errors, contents)=>{
        response.writeHead(200, {"Content-Type": "image/png"});
            response.write(contents);
            response.end();
        });  
    
   }
   else if(request.url === "/images/persian_cat.png"){
    fs.readFile("./images/persian_cat.png", (errors, contents)=>{
        response.writeHead(200, {"Content-Type": "image/png"});
            response.write(contents);
            response.end();
        });  
    
   }
    else {
        response.end('File not found!!!');
    }
});
server.listen(6789);
console.log("listening on port 6789");
