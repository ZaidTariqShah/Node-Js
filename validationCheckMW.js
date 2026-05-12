import http from "http";

function validation(data, res) {
  if (!data.email || !data.password) {
    res.writeHead(400, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        success: false,
        message: "Email and Password are required",
      }),
    );
    return false;
  }
  return true;
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url.startsWith("/check")) {
    let body = "";
    req.on("data", (chunks) => {
      body += chunks;
    });
    req.on("end", () => {
      try {
        const parsedData = JSON.parse(body);
        const isValid = validation(parsedData, res);
        if (!isValid) return;
        res.end(
          JSON.stringify({
            success: true,
            message: "Login Successful",
            data: parsedData,
          }),
        );
      } catch (error) {
        res.writeHead(400, { "content-type": "application/json" });
        res.end(
          JSON.stringify({ success: false, message: "Invalid JSON data" }),
        );
      }
    });
  }
});

server.listen(9001, () => console.log("Server Is Running Successfully"));
