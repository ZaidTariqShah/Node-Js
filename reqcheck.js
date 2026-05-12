import http from "http";
let totalRequests = 0;

function requestCounterMiddleware(req) {
  totalRequests++;
  console.log(`Total Request Received ${totalRequests}`);
}
const server = http.createServer((req, res) => {
  requestCounterMiddleware(req);
  res.end("Server Running");
});

server.listen(8000, () => console.log("Server Started"));
