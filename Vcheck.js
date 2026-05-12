import http from "http";

const Validation = (data, res) => {
  if (!data.email || !data.password) {
    res.writeHead(400, "Bad Boy", { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Email and Password are required" }));
    return false;
  }
  return true;
};

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url.startsWith("/checking")) {
    let body = "";
    req.on("data", (dataChunks) => {
      body += dataChunks;
    });
    req.on("end", () => {
      const parsedData = JSON.parse(body);
      console.log(parsedData);
      const isValid = Validation(parsedData, res);
      if (!isValid) return;
      res.writeHead(200, "Success", { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Message Received Successfully",
          data: parsedData,
        }),
      );
    });
  } else res.end("Route Not Found");
});
server.listen(9009, () => console.log("Running PORT 9009"));
