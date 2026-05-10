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
  //Query Parameter
  // const url = new URL(req.url, "http://localhost:8001");
  // const name = url.searchParams.get("name");
  // const age = url.searchParams.get("age");
  // console.log(url.search);
  // return res.end(`${name} ${age}`);

  // Static Routes
  // if (req.url === "/me") return res.end("Hey I am Me");

  // if (req.url === "/me/info") return res.end("I am info");

  // if (req.url === "/me/info/about") {
  //   return res.end("Hey this is all about me");
  // }

  res.end("Route Not Found");
});

server.listen(8001, () => console.log("Server is running successfully"));
