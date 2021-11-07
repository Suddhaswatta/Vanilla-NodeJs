const http = require( 'http');
const url = require('url');



const server = http.createServer((req,res)=>{

    
    const parsedUrl =  url.parse(req.url,true);
    const exp = /^(\/)+|(\/)*$/g;
    const pathname = parsedUrl.pathname.replace(exp,"")
    
    const method = req.method.toLowerCase();
    const query = parsedUrl.query;
    const headers = req.headers
    console.log(`\nMethod ${method} and path ${pathname} with query ${JSON.stringify(query)} with headers ${JSON.stringify(headers)}`);

    res.end("Hello World !!! \n")


});

server.listen(3000,()=>{
    console.log("Server has started on port 3000");
});


console.log("Hello World");

