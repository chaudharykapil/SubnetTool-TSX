
var express = require('express');  
var app = express();  
const fs = require('fs');
const yaml = require('js-yaml');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {  
   res.send('Welcome to JavaTpoint');  
})
app.get("/getfolderstructure",(req,res)=>{
    fs.readFile('./Data.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.send("{}")
        }
        res.send(data)
      });
})
app.get("/getfiledata/:name",function (req,res){
    
    fs.readFile('./files/'+req.params.name, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.send("")
        }
        let jsn = yaml.load(data);
        console.log(jsn)
        res.send(jsn)
      });
      
})
var server = app.listen(8000, function () {  
var host = server.address().address  
var port = server.address().port  
 console.log("Example app listening at http://127.0.0.1:%s", port)  
})