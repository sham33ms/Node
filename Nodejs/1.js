const fs= require("fs");

//file write in sync
console.log("start")
fs.writeFileSync("hello.txt","hello i am created using the sync write file ");
console.log("file creeated")
console.log("End")
// file read with sync
console.log('1. Starting sync read...');
const data = fs.readFileSync('hello.txt','utf8');
console.log('2. File contents:', data);
console.log('3. Done reading file');


//file write in async
console.log("start");
fs.writeFile("hi.txt", "hi i am created by async write file", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("file created");
  }
});
console.log("End");


//file created by async in read 
console.log('1. Starting async read...');
fs.readFile('hi.txt', 'utf8', (err, dataa) => {
  if (err) throw err;
  console.log('2. File contents:', dataa);
});

console.log('3. Done starting read operation');


//using http for localhost

console.log("Hello from Node.js!");

const http = require('http');


//linking two pages
const add = require('./2.js');
// console.log(add(5, 10)); // 15


// req handling using if else if
const server = http.createServer((req, res) => {
//routing to home page 
  if (req.url==="/"){
//to use html
  res.writeHead(200, {'Content-Type': 'text/html'});
// to write in html 
  res.write("<h1>hi</h1>");
  res.write("<h2>HI</h2>");
  res.write(`<p>Result:${add(5,10)}</p>`)
  }
//routing to different pages
  else if (req.url==="/second")
  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>hi</h1>");
    res.write("<h2>HI</h2>");
    res.write(`<p>Result:${add(5,25)}</p>`)
  }

//if no page 404 is done
  else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write("<h1>Error</h1>")
  }
  res.end();
});


//initilaizing the server port
server.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
