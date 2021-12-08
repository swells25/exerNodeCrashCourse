const fs = require('fs');
const path = require('path');

//Create folder
//fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//    if(err) throw err;
//    console.log("Folder created...");
//});

/*/create and write to file
fs.writeFile
    (path.join(__dirname, '/test', 'hello.txt'),
     'Hello World', 
        function(err){
            if(err) throw err;
    console.log("Folder created...");
    

    // apend
        fs.appendFile
            (path.join(__dirname, '/test', 'hello.txt'),
            ' I love node.js ', 
            function(err){
                if(err) throw err;
        console.log("Folder created...");
            }
        );
    }
);
*/
//Read file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {if (err) throw err;
 console.log('File renamed...');
});
