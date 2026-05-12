import http from "http";

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url.startsWith("/users")) {
    let body = "";
    req.on("data", (chunks) => {
      body += chunks;
    });
    req.on("end", () => {
      try {
        const parsedData = JSON.parse(body);
        console.log(typeof body);
        console.log(parsedData);
        res.writeHead(200, "Success Bro", {
          "content-type": "application/json",
        });
        res.end(JSON.stringify({ message: "Data Received", Data: parsedData }));
      } catch (error) {
        console.error("Error ", error);
        res.writeHead(400, "Bad Request", {
          "content-type": "application/json",
        });
        res.end(
          JSON.stringify({ success: false, message: "Invalid JSON Data" }),
        );
      }
    });
  }
});
server.listen(7000, () => console.log("Server is running successfully"));
