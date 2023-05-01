const app = require('express')();

const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');

app.get('/student',(req, res)=>{
    console.log("headers - "+req.headers);
    const data = {
        name: "Vivek",
        standard: "X",
        section: "c",
    };
    console.log(data);
    res.send(data);
});
app.get('/vivek',(req, res)=>{
    console.log("headers - "+req.headers);
    const data = {
        name: "Vivek raj",
        standard: "Xt",
        section: "c",
    };
    console.log(data);
    res.send(data);
});
app.get('/data', (req, res) => {
    fs.readFile('data.json', (err, data) => {
      if (err) throw err;
      res.send(JSON.parse(data));
    });
  });
  
const server = app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
});
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello, world!');
//     console.log(hi);
//   });
//   app.listen(3000, () => {
//     console.log('Server started on port 3000');
//   });
  