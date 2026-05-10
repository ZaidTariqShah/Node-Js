const http = require("http");

const server = http.createServer((req, res) => {
  // Set response header

  console.log("req headers are", req.headers);
  console.log("req path is", req.url);

  if (req.url === "/me") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const data = { name: "yameen", age: 25 };
    res.end(JSON.stringify(data));
    return;
  }

  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  // Send response
  res.end("Hello from vanilla Node.js server!");
});

// Start server
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
