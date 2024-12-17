const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./templates/home.html");
const aboutUs = readFileSync("./templates/aboutus.html");
const contactUs = readFileSync("./templates/contactus.html");
const dotaImage = readFileSync("./dota2.jpg");
const dota2Icon = readFileSync("./dota2Icon.png");
const yarden = readFileSync("./yarden.jpg");
const nave = readFileSync("./nave.png");
const styles = readFileSync("./css/styles.css");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/" || url === "/home.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/aboutus.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(aboutUs);
    res.end();
  } else if (url === "/contactus.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(contactUs);
    res.end();
  } else if (url === "/css/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(styles);
    res.end();
  } else if (url === "/dota2.jpg") {
    res.writeHead(200, { "content-type": "image/jpg" });
    res.write(dotaImage);
    res.end();
  } else if (url === "/yarden.jpg") {
    res.writeHead(200, { "content-type": "image/jpg" });
    res.write(yarden);
    res.end();
  } else if (url === "/dota2Icon.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(dota2Icon);
    res.end();
  } else if (url === "/nave.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(nave);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});
server.listen(3000);
