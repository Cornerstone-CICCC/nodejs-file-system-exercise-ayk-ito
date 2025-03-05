// Check the README.md file for instructions to the exercise
import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
  if (req.url === "/view-image") {
    const filePath = path.join("dist", "images", "veryhappydog.jpg");
    fs.readFile(filePath, (err, data) => {
      if (data) {
        console.log("get image");
        res.writeHead(200, { "Content-type": "image/jpeg" });
        res.write(data);
      } else {
        res.writeHead(500, { "Content-type": "text/html" });
        res.write("500 Internal Server Error");
      }
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.write("404 Not Found");
    res.end();
  }
});
server.listen(3000, () => console.log("Server is running at port 3000"));
