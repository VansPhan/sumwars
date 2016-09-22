var mongoose = require("mongoose");

var AllMonsterSchema = new mongoose.Schema(
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

var RuneSchema = new mongoose.Schema(
	{
		sub_hpp: String,
		grade: Number,
		sub_hpf: String,
		sub_acc: String,
		i_v: Number,
		i_t: String,
		id: Number,
		s3_data: { gvalue: Number, enchanted: Boolean },
		sub_atkf: String,
		slot: Number,
		sub_crate: Number,
		sub_spd: String,
		s2_v: Number,
		s2_t: String,
		s4_t: String,
		s4_v: Number,
		monster: Number,
		s1_v: Number,
		s2_data: { gvalue: Number, enchanted: Boolean },
		s3_v: Number,
		sub_atkp: Number,
		sub_res: Number,
		s1_data: { gvalue: Number, enchanted: Boolean },
		locked: Number,
		level: Number,
		sub_deff: String,
		monster_n: String,
		sub_cdmg: String,
		s3_t: String,
		unique_id: Number,
		s4_data: {},
		s1_t: String,
		m_v: Number,
		sub_defp: String,
		m_t: String
  	}
);


mongoose.model("AllMonster", AllMonsterSchema);
mongoose.model("Monster", MonsterSchema);
mongoose.model("Rune", RuneSchema);
mongoose.connect("mongodb://localhost/sumwars");

module.exports = mongoose;
