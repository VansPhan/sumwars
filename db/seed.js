var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Monster = mongoose.model("Monster");

Monster.remove({}).then(function() {
  Monster.collection.insert(seedData).then(function(){
    process.exit();
  });
});
