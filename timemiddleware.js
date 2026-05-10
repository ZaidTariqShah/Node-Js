import http from "http";

function timeLogger(req, res, next) {
  req.time = new Date().toLocaleTimeString();
  next();
}
const server = http.createServer((req, res) => {
  if (req.url === "/time") {
    return timeLogger(req, res, () => res.end(req.time));
  }
  res.end("No Route Found");
});

server.listen(8008, () => console.log("8008 PORT is running successfully"));
