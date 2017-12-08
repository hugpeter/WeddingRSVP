var express         = require("express"),
    app             = express();
    
//define routes
var indexRoutes = require("./routes/index");


app.use("/", indexRoutes);   
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


//LISTEN!
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("WeddingRSVP is running!");
});