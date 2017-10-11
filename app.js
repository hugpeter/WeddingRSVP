var express         = require("express"),
    app             = express();
    
app.use(express.static(__dirname + "/public"));

//LISTEN!
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("WeddingRSVP is running!");
});