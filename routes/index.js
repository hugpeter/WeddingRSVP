var express = require("express");
var router = express.Router({mergeParams: true});


//landing page
router.get("/", function(req, res){
   res.render("landingPage.ejs"); 
});

//info
router.get("/planning/", function(req, res){
   res.render("planning.ejs"); 
});

//registry
router.get("/registry/", function(req, res){
   res.render("registry.ejs");
});

//photos
router.get("/photos/", function(req, res){
   res.render("photos.ejs");
});

//rsvp
router.get("/rsvp/", function(req, res){
   res.render("rsvp.ejs");
});

//export routes
module.exports = router;