const express = require('express');
const app= express();
const path = require("path");
const port= process.env.PORT ||3000;

const static_path=path.join(__dirname);
app.use(express.static(static_path))

console.log(path.join(__dirname))

app.get("/",(req,res)=>{
    res.send(static_path/index.html)
    res.end();
   });

   app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})
