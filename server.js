let express = require("express");
let mongoose = require('mongoose');
let config= require('./config.json');

mongoose.connect(config.databaseURL);

let app= express();
/*app.get("/",function(req,res){
    res.end("Hello World")
})*/

const schema = new mongoose.Schema({
    nev: String,
    szavazatok : Number
});

const model =  mongoose.model('Opciok',schema , 'Opciok');

app.use(express.urlencoded({
    extended: true
}));
app.post("/szavazas", function(req, res){
    console.log(req.body);

    model.findOne({ nev: req.body.tanár}, function(err, doc){
        if(doc)
        {
            console.log(req.body.tanár + ' már létezik')
            doc.szavazatok++;
            doc.save();
        }
        else{
            console.log(req.body.tanár+' még nem létezik')
        new model({
            
            nev: req.body.tanár,
            szavazatok : 1
        }).save();
        }
    });
    
  
    res.redirect('/');
})


app.use(express.static('public'));
app.listen(9000);
