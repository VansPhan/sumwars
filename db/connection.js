var mongoose = require("mongoose");

var MonsterSchema = new mongoose.Schema(
	{
		b_spd: Number,
		b_atk: Number,
		b_acc: Number,
		b_crate: Number,
		id: Number,
		b_def: Number,
		name: String,
		level: Number,
		b_cdmg: Number,
		unit_id: Number,
		stars: Number,
		attribute: String,
		master_id: Number,
		b_res: Number,
		b_hp: Number
  	}
);

mongoose.model("Monster", MonsterSchema);
mongoose.connect("mongodb://localhost/sumwars");

module.exports = mongoose;
