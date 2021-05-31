let express = require("express");
let app= express();
/*app.get("/",function(req,res){
    res.end("Hello World")
})*/
app.use(express.urlencoded());
app.post("/szavazas", function(req, res){
    console.log(req.body)
})


app.use(express.static('public'));
app.listen(9000);
