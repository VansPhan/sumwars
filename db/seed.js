var mongoose  = require("./connection");
var allMonsterSeed  = require("./allMonsterSeed");
var userSeed  = require("./userSeed");

var AllMonster = mongoose.model("AllMonster");
var Monster = mongoose.model("Monster");
var Rune = mongoose.model("Rune");

AllMonster.remove({}).then(function() {
  AllMonster.collection.insert(allMonsterSeed.mons).then(function(){
    process.exit();
  });
});

Monster.remove({}).then(function() {
	userSeed.mons.map(function(mon) {
		if (mon.name.includes("(")) {
			var str = []
			mon.name.split(" ").map(function(e) {
				if (e.includes("(") || e.includes(")")) {}
				else {
					str.push(e)
				}
			})
			mon.name = str.join(" ")
		}
		if (mon.name.includes("Angelmon")) {
			if (mon.name == "Angelmon") {
				mon.img = ("angelmon_" + mon.attribute.toLowerCase() + ".png");
			}
			else if (mon.name == "Devilmon") {
				mon.img = ("devilmon_" + mon.attribute.toLowerCase() + ".png");
			}
			else if (mon.name == "King Angelmon") {
				mon.img = ("king_angelmon_" + mon.attribute.toLowerCase() + ".png");
			}
			else if (mon.name.includes("King")) {
				mon.img = ("king_angelmon_" + mon.attribute.toLowerCase() + "_awakened.png");
			}
			else {
				mon.img = ("angelmon_" + mon.attribute.toLowerCase() + "_awakened.png");
			}
		}
		if (mon.name == "Rainbowmon") {
			mon.img = ("angelmon_rainbow.png");
		}
		switch(mon.name) {
			case "Amazon":
				mon.img = ("amazon_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Mara":
			case "Lyn":
			case "Hina":
			case "Ellin":
			case "Ceres":
				mon.img = ("amazon_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Archangel":
				mon.img = ("archangel_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Fermion":
			case "Artamiel":
			case "Eladriel":
			case "Ariel":
			case "Velajuel":
				mon.img = ("archangel_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Barbaric King":
				mon.img = ("barbaric_king_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Hrungnir":
			case "Mimirr":
			case "Hraesvelg":
			case "Aegir":
			case "Surtr":
				mon.img = ("barbaric_king_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Battle Mammoth":
				mon.img = ("battle_mammoth_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Basalt":
			case "Marble":
			case "Olivine":
			case "Talc":
			case "Granite":
				mon.img = ("battle_mammoth_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Bearman":
				mon.img = ("bearman_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Haken":
			case "Ahman":
			case "Dagorr":
			case "Gruda":
			case "Kungen":
				mon.img = ("bearman_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Beast Hunter":
				mon.img = ("beast_hunter_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Hannam":
			case "Baekdu":
			case "Suri":
			case "Gangchun":
			case "Nangrim":
				mon.img = ("beast_hunter_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Beast Monk":
				mon.img = ("beast_monk_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Rahul":
			case "Shazam":
			case "Ritesh":
			case "Chandra":
			case "Kumar":
				mon.img = ("beast_monk_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Bounty Hunter":
				mon.img = ("bounty_hunter_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Jamie":
			case "Walkers":
			case "Roger":
			case "Wayne":
			case "Randy":
				mon.img = ("bounty_hunter_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Brownie Magician":
				mon.img = ("brownie_magician_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Korona":
			case "Gemini":
			case "Aquila":
			case "Orion":
			case "Draco":
				mon.img = ("brownie_magician_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Chimera":
				mon.img = ("chimera_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Zeratu":
			case "Shan":
			case "Lagmaron":
			case "Taor":
			case "Rakan":
				mon.img = ("chimera_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Cow Girl":
				mon.img = ("cow_girl_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Cassie":
			case "Loren":
			case "Hannah":
			case "Sera":
			case "Anne":
				mon.img = ("cow_girl_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Death Knight":
				mon.img = ("death_knight_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Dias":
			case "Conrad":
			case "Briand":
			case "Fedora":
			case "Arnold":
				mon.img = ("death_knight_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Dragon":
				mon.img = ("dragon_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Grogen":
			case "Zerath":
			case "Jamire":
			case "Verad":
			case "Zaiross":
				mon.img = ("dragon_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Dragon Knight":
				mon.img = ("dragon_knight_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Ragdoll":
			case "Jager":
			case "Leo":
			case "Chow":
			case "Laika":
				mon.img = ("dragon_knight_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Drunken Master":
				mon.img = ("drunken_master_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Wei Shin":
			case "Tien Qin":
			case "Huan":
			case "Mao":
			case "Xiao Chun":
				mon.img = ("drunken_master_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Elemental":
				mon.img = ("elemental_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Camules":
			case "Priz":
			case "Taharus":
			case "Daharenos":
			case "Bremis":
				mon.img = ("elemental_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Epikion Priest":
				mon.img = ("epikion_priest_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Rasheed":
			case "Iona":
			case "Michelle":
			case "Rina":
			case "Chloe":
				mon.img = ("epikion_priest_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Fairy":
				mon.img = ("fairy_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Sorin":
			case "Neal":
			case "Aeilene":
			case "Elucia":
			case "Iselia":
				mon.img = ("fairy_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Fairy Queen":
				mon.img = ("fairy_queen_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Fran":
				mon.img = ("fairy_queen_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Forest Keeper":
				mon.img = ("forest_keeper_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Garuda":
				mon.img = ("garuda_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Rizak":
			case "Teon":
			case "Lindermen":
			case "Konamiya":
			case "Cahule":
				mon.img = ("garuda_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Ghost":
				mon.img = ("ghost_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "Main":
				mon.img = ("main_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "dark":
			case "light":
			case "wind":
			case "water":
			case "fire":
				mon.img = ("main_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Main":
				mon.img = ("main_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "dark":
			case "light":
			case "wind":
			case "water":
			case "fire":
				mon.img = ("main_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Main":
				mon.img = ("main_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "dark":
			case "light":
			case "wind":
			case "water":
			case "fire":
				mon.img = ("main_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Main":
				mon.img = ("main_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "dark":
			case "light":
			case "wind":
			case "water":
			case "fire":
				mon.img = ("main_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Main":
				mon.img = ("main_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "dark":
			case "light":
			case "wind":
			case "water":
			case "fire":
				mon.img = ("main_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Main":
				mon.img = ("main_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "dark":
			case "light":
			case "wind":
			case "water":
			case "fire":
				mon.img = ("main_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Main":
				mon.img = ("main_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "dark":
			case "light":
			case "wind":
			case "water":
			case "fire":
				mon.img = ("main_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Main":
				mon.img = ("main_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "dark":
			case "light":
			case "wind":
			case "water":
			case "fire":
				mon.img = ("main_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			case "Main":
				mon.img = ("main_" + mon.attribute.toLowerCase() + ".png");
			break;
			case "dark":
			case "light":
			case "wind":
			case "water":
			case "fire":
				mon.img = ("main_" + mon.attribute.toLowerCase() + "_awakened.png");
			break;
			default: 
			break;
		}
	})
  Monster.collection.insert(userSeed.mons).then(function(){
    process.exit();
  });
});

Rune.remove({}).then(function() {
  Rune.collection.insert(userSeed.runes).then(function(){
    process.exit();
  });
});