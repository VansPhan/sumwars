var express = require("express");
var hbs = require("express-handlebars");
var parser = require("body-parser");
var mongoose = require("./db/connection");

var app = express();

var AllMonster = mongoose.model("AllMonster");
var Monster = mongoose.model("Monster");
var Rune = mongoose.model("Rune");

app.set("port", process.env.PORT || 1337);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "index"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json({extended: true}));

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/api/allmons", function(req, res){
  AllMonster.find({}).then(function(mons){
    res.json({ mons });
  });
});

app.get("/api/mons", function(req, res){
  Monster.find({}).then(function(mons){
    res.json({ mons });
  });
});

app.get("/api/runes", function(req, res){
  Rune.find({}).then(function(runes){
    res.json({ runes });
  });
});

app.listen(1337, function() {
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
});