const http = require('http');
http.createServer((req, res) => {
    res.end("<h2>Hello jaahid server</h2>")
}).listen(80,()=>{
    console.log("server is running on port 80")
});