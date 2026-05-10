import http from "http";

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:8004");
  const name = url.searchParams.get("name");
  const age = url.searchParams.get("age");
  if (!name || !age) return res.end("Please provide name and age");
  return res.end(`Hey my name is ${name} and my age is ${age}`);
});

server.listen(8004, () => console.log("Server 8004 is running successfully"));
