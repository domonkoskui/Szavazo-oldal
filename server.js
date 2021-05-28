let express = require("express");
let app= express();
/*app.get("/",function(req,res){
    res.end("Hello World")
})*/
app.listen(9000);

app.use(express.static('public'));



