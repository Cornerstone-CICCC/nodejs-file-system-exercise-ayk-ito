"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Check the README.md file for instructions to the exercise
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/view-image") {
        const filePath = path_1.default.join("dist", "images", "veryhappydog.jpg");
        fs_1.default.readFile(filePath, (err, data) => {
            if (data) {
                console.log("get image");
                res.writeHead(200, { "Content-type": "image/jpeg" });
                res.write(data);
            }
            else {
                res.writeHead(500, { "Content-type": "text/html" });
                res.write("500 Internal Server Error");
            }
            res.end();
        });
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.write("404 Not Found");
        res.end();
    }
});
server.listen(3000, () => console.log("Server is running at port 3000"));
