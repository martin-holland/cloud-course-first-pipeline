// Minimal web server with no dependencies. App Service sets PORT; locally it falls back to 3000.
const http = require("http");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 3000;
const page = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(page);
}).listen(port, () => console.log("listening on " + port));
