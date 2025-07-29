const express = require('express');
const app = express();
const port = 3000;
const a=[];

// Define a route for GET requests to the root URL
app.route('/')
.get((req, res) => {
  res.send(a);
}).patch((req,res)=>{
a.push('shameem')
console.log('shameem pushed');
res.send('shameem')
})

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


