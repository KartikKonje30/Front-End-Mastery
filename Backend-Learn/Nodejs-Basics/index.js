
const http = require("http");

const PORT = 8081;

const serverDetails = {
    serverName: "Kartik Server",
    version: "1.0.0",
    currentDate: new Date().toDateString(),
    currentTime: new Date().toTimeString(),
    author: "Kartik Konje <kartikkonje.01@gmail.com>"
};

const server = http.createServer((req, res) => {
    
    const {url} = req;

    if(url == "/status"){
    res.writeHead(200, { "Content-Type": "application/json"});
    res.write(JSON.stringify(serverDetails));
    }
    else{
    res.writeHead(200, { "Content-Type": "text/html"});
    res.write("<h1>Hello from Server</h1>");
    }

    res.end();
})

server.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})