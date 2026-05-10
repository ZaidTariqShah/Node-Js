import http from "http";
//Logger Middleware
function Logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

const server = http.createServer((req, res) => {
  return Logger(req, res, () =>
    res.end("Logger function working successfully"),
  );
  // Route Not Found
  res.end("Route Not Found");
});
server.listen(8002, () => console.log("Server is running successfully"));
