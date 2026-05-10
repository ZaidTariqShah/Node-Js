import http from "http";

const server = http.createServer((req, res) => {
  //Dynamic Method 1
  const [, route, id, action] = req.url.split("/");
  if (route === "info" && action === "profilepicture") {
    return res.end(`Hey My Id Is ${id}`);
  }
  //Dynamic Method 2
  const part = req.url.split("/");
  if (part[1] === "info" && part[3] === "profile") {
    return res.end(`Hi My ID is ${part[2]}`);
  }
  res.end("No Route Found");
});

server.listen(8003, () =>
  console.log(`8003 PORT Number started successfully `),
);
