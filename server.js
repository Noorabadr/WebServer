const http =require('http');
const fs = require('fs');
const PORT =3000;

const server = http.createServer((request,response)=>{
    console.log("Request url : " + request.url);
    console.log("Request method : " + request.method );

    if(request.url === '/' && request.method === 'GET'){
        
        fs.readFile('index.html', (err, data) => {

            if (err) {
                response.statusCode = 500;
                response.end('Internal Server Error');
                return;
            }
            response.statusCode = 200;
            response.end(data);
        });
    }

    else if(request.url==='/api' && request.method==='GET'){
        const student={
            name:"Noora Badr",
            StudentId:12326084
        };
        response.setHeader('content-Type','application/json');
        response.statusCode=200;
        response.end(JSON.stringify(student));
    }
    else {
        response.statusCode=404;
        response.end("404 Not Found");
        
    }
});

server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}/`);
});
