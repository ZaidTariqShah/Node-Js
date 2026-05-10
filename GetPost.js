import http from "http";
const data = ["zara", "Hey", "Bie"];
const output = { isLoggedIn: true };

const server = http.createServer((req, res) => {
  //GET
  if (req.url === "/users" && req.method === "GET") {
    // res.writeHead(statusCode, statusMessage, headers);
    res.writeHead(200, "Success", {
      "content-type": "application/json",
    });
    console.log(req.headers);
    return res.end(JSON.stringify(data));
  }
  //POST
  if (req.url === "/users" && req.method === "POST") {
    output.isLoggedIn = false;
    return res.end("New User Created Successfully");
  }
  //DELETE
  if (req.url.startsWith("/users/") && req.method === "DELETE") {
    const id = req.url.split("/")[2];
    data.splice(id - 1, 1);
    return res.end("User Deleted Successfully");
  }
  //EDIT
  if (req.url.startsWith("/users/") && req.method === "PUT") {
    const id = req.url.split("/")[2];
    const params = new URL(req.url, "http://localhost:9000/users/");
    const extractedData = params.searchParams.get("newname");
    data[id - 1] = extractedData;
    return res.end("Name Modified Successfully");
  }
  res.end("No Route Found");
});

server.listen(9000, () => console.log("Server 9000 is running successfully"));
