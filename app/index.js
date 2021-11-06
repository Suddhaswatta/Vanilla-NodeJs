const http = require( 'http');
const url = require('url');



const server = http.createServer((req,res)=>{

    
    const parsedUrl =  url.parse(req.url,true);
    const pathname = parsedUrl.pathname.replace(/^\/+|\/*$/g,"")
    
    const method = req.method.toLowerCase();

    console.log(`Method ${method} and path ${pathname}`);

    res.end("Hello World !!! \n")


});

server.listen(3000,()=>{
    console.log("Server has started on port 3000");
});


console.log("Hello World");

