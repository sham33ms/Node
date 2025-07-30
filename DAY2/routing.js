const express = require('express')
const app = express()
var a=[{id:1,name:'shameem'}, {id:2,name:'Rishi'}]
app.use(express.json());


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.json({a});
});


app.post('/',(req,res)=>{
    res.send('hello from post')
})
app.put('/',(req,res)=>{
    res.send('hello from put')
})
app.patch('/',(req,res)=>{
    res.send('hello from patch')
})
app.delete('/',(req,res)=>{
    res.send('hello from delete')
})


app.listen(8080);

