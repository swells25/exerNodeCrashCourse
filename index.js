const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
//    if(req.ur === '/') {
//        fs.readFile(
//        path.join(__dirname, 'Publics', 'index.html'), 
//        (err, content) => {
//            if(err) throw err;
//        res.writeHead(200, { 'Content-Type': 'text/html'});
//        res.end(content);
//            }
//        );
//    }
//});

//const server = http.createServer((req, res) => {
//    if(req.ur === '/api/users') {
//        const users = [
//           { name: 'Bob Smith', age: 40},
//            { name: 'John Doe', age: 30}
//       ];
//       res.writeHead(200, {'Content-Type': 'application/json'}); 
 //      res.end(json.stringify(users));
       
// build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url
);

// Extension of the file
    let extname = path.extname(filepath);

 // Inital content type
    let contentType = 'text/html';
 
    //check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';

    }

    //read file
    fs.readFile(filePath, (err, content) => {
       if(err){
           if (err.code == 'ENOENT') [
               //page not found
               fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) 
               => {
                   res.writeHead(200, {'Content-Type': 'contentType'}); 
                   res.end(content, 'utf8');
               })
            }  else { 
                res.writheHead(500);
                res.end(`Server Error: ${err.code}`);    
       } 
    }
}; 


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
