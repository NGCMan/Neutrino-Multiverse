function get(id) {
	return document.getElementById(id);
}
function getDefaultSave() {
	return {
		ideas: new Decimal(10),
		thinkers: [
			"empty",
			{
				amount:new Decimal(0),
				cost:new Decimal(10),
				mult:new Decimal(1),
				bought:new Decimal(0),
				costMult:new Decimal(1.15)
			},
			{
				amount:new Decimal(0),
				cost:new Decimal(100),
				mult:new Decimal(1),
				bought:new Decimal(0),
				costMult:new Decimal(1.2)
			},
			{
				amount:new Decimal(0),
				cost:new Decimal(10000),
				mult:new Decimal(1),
				bought:new Decimal(0),
				costMult:new Decimal(1.3)
			},
			{
				amount:new Decimal(0),
				cost:new Decimal(1000000),
				mult:new Decimal(1),
				bought:new Decimal(0),
				costMult:new Decimal(1.35)
			},
			{
				amount:new Decimal(0),
				cost:new Decimal(1e9),
				mult:new Decimal(1),
				bought:new Decimal(0),
				costMult:new Decimal(1.375)
			},
			{
				amount:new Decimal(0),
				cost:new Decimal(1e11),
				mult:new Decimal(1),
				bought:new Decimal(0),
				costMult:new Decimal(1.4)
			},
			{
				amount:new Decimal(0),
				cost:new Decimal(1e14),
				mult:new Decimal(1),
				bought:new Decimal(0),
				costMult:new Decimal(1.41)
			},
			{
				amount:new Decimal(0),
				cost:new Decimal(1e18),
				mult:new Decimal(1),
				bought:new Decimal(0),
				costMult:new Decimal(1.42)
			},
			{
				amount:new Decimal(0),
				cost:new Decimal(1e23),
				mult:new Decimal(1),
				bought:new Decimal(0),
				costMult:new Decimal(1.42)
			}
			],
		exist: new Decimal(0),
		lastTick: new Date().getTime(),
		creations: new Decimal(0),
		upgrades: [],
		existMult: new Decimal(1),
		existMultCost: new Decimal(2),
	}
}

let player = getDefaultSave();

function gameLoop() {
	let newTime = new Date().getTime()
	let diff = (newTime - player.lastTick) / 1000;
	player.lastTick = newTime;
	produce(diff);
	update();
	mults();
}

function produce(time) {

	player.ideas = player.thinkers[1].amount.times(time).add(player.ideas);
	for(let i = 1; i < 9; i++) {
		player.thinkers[i].amount = player.thinkers[i+1].amount.times(time).add(player.thinkers[i].amount);
	}
}

function update() {
	get("ideas").innerHTML = format(player.ideas,true);
	let unlocked7 = false;
	for(let i = 1; i <= 9; i++) {
		get("tier"+i+"Amount").innerHTML = format(player.thinkers[i].amount,true);
		get("tier"+i+"Mult").innerHTML = format(player.thinkers[i].mult);
		get("tier"+i+"Cost").innerHTML = format(player.thinkers[i].cost,true);
		if(canBuyTier(i)) {
			get("buy1Tier"+i).className = "storebtn";
			get("buyMaxTier"+i).className = "storebtn";
		} else {
			get("buy1Tier"+i).className = "storebtnlocked";
			get("buyMaxTier"+i).className = "storebtnlocked";
		}
		if(i <= 9) {
			if(player.creations.gte(i-1)) {
				get("tier"+i).style.display = "";
			} else {
				get("tier"+i).style.display = "none";
			}
		} else {
			if(player.exist.gte(player.thinkers[i].cost) || player.thinkers[i].amount.gt(0)) {
				get("tier"+i).style.display = "";
				unlocked7 = true;
			} else {
				get("tier"+i).style.display = "none";
			}
		}
	}
	if(unlocked7) {
		get("weakMaxAll").style.display = "";
	} else {
		get("weakMaxAll").style.display = "none";
	}
	if(existOnCreate().gte(1)) {
		get("creation").style.display = "";
		get("existOnCreate").innerHTML = format(existOnCreate(),true);
	} else {
		get("creation").style.display = "none";
	}
	if(player.creations.gt(0)) {
		get("existenceTab").style.display = "";
		get("exist").innerHTML = format(player.exist,true);
	} else {
		get("existenceTab").style.display = "none";
	}
	if(player.upgrades.includes("s11")) {
		get("upgrade11").className = "upgradebtn upgradebought";
	} else if(canBuyUpgrade("11")) {
		get("upgrade11").className = "upgradebtn creationbtn";
	} else {
		get("upgrade11").className = "upgradebtn storebtnlocked";
	}

	if(player.upgrades.includes("s21")) {
		get("upgrade21").className = "upgradebtn upgradebought";
	} else if(canBuyUpgrade("21")) {
		get("upgrade21").className = "upgradebtn creationbtn";
	} else {
		get("upgrade21").className = "upgradebtn storebtnlocked";
	}
	if(canBuyUpgrade("12")) {
		get("upgrade12").className = "upgradebtn creationbtn";
	} else {
		get("upgrade12").className = "upgradebtn storebtnlocked";
	}
}
function mults() {
	for(let i = 1; i <= 9; i++) {
		if(player.upgrades.includes("s11")) {
			player.thinkers[i].mult = new Decimal(1.02).pow(player.thinkers[i].bought);
		} else {
			player.thinkers[i].mult = new Decimal(1.01).pow(player.thinkers[i].bought);
		}
		if(player.upgrades.includes("s21")) {
			player.thinkers[i].mult = player.thinkers[i].mult.times(player.creations.cbrt());
		}
	}
}
function existOnCreate() {
	return player.ideas.div(100).root(3).times(player.existMult);
}
function buyTier(tier) {
	if(canBuyTier(tier) && tier <= 9) {
		player.thinkers[tier].amount = player.thinkers[tier].amount.add(1);
		player.ideas = player.ideas.sub(player.thinkers[tier].cost);
		player.thinkers[tier].cost = player.thinkers[tier].cost.times(player.thinkers[tier].costMult);
		player.thinkers[tier].bought = player.thinkers[tier].bought.add(1);
	} else if(canBuyTier(tier) && tier >= 10) {
		player.thinkers[tier].amount = player.thinkers[tier].amount.add(1);
		player.exist = player.exist.sub(player.thinkers[tier].cost);
		player.thinkers[tier].cost = player.thinkers[tier].cost.times(player.thinkers[tier].costMult);
		player.thinkers[tier].bought = player.thinkers[tier].bought.add(1);
	}
}
function canBuyTier(tier) {
	if(player.ideas.gte(player.thinkers[tier].cost) && tier <= 9) {
		return true;
	} else if(player.exist.gte(player.thinkers[tier].cost) && tier > 9) {
		return true;
	} else {
		return false
	}
}
function upgradeCost(upgrade) {
	let cost = new Decimal(0);
	switch(upgrade) {
		case "11":
			cost = new Decimal(1);
			break;
		case "12":
			cost = player.existMultCost;
			break;
		case "21":
			cost = new Decimal(10);
			break;
	}
	return cost;
}
function canBuyUpgrade(upgrade) {
	let cost = upgradeCost(upgrade);

	if(player.exist.gte(cost)) {
		return true;
	}
	return false;
}
function buyUpgrade(upgrade) {
	if(canBuyUpgrade(upgrade) && !player.upgrades.includes("s"+upgrade)) {
		if(upgrade === "12") {
			player.existMultCost = player.existMultCost.times(2);
			player.existMult = player.existMult.times(1.5);

		} else {
			player.upgrades.push("s"+upgrade);
		}
		player.exist.sub(upgradeCost(upgrade));
	}
}
function buyMaxTier(tier) {
	if(tier <= 9) {
		while(player.ideas.gte(player.thinkers[tier].cost)) {
			buyTier(tier);
		}
	} else {
		while(player.exist.gte(player.thinkers[tier].cost)) {
			buyTier(tier);
		}
	}
}
function maxAll(weak) {
	let j;
	if(weak) {
		j = 9;
	} else {
		j = 10;
	}
	for(let i = j; i > 0; i--) {
		buyMaxTier(i);
	}
}
function creation() {
	player.exist = player.exist.add(existOnCreate());
	player.ideas = new Decimal(10);
	for(let i = 1; i <= 9; i++) {
		player.thinkers[i].amount = new Decimal(0);
		player.thinkers[i].bought = new Decimal(0);
	}
	player.thinkers[1].cost = new Decimal(10);
	player.thinkers[2].cost = new Decimal(100);
	player.thinkers[3].cost = new Decimal(10000);
	player.thinkers[4].cost = new Decimal(1000000);
	player.thinkers[5].cost = new Decimal(1e9);
	player.thinkers[6].cost = new Decimal(1e11);
	player.thinkers[7].cost = new Decimal(1e14);
	player.thinkers[8].cost = new Decimal(1e18);
	player.thinkers[9].cost = new Decimal(1e23);

	player.thinkers[1].costMult = new Decimal(1.15);
	player.thinkers[2].costMult = new Decimal(1.2);
	player.thinkers[3].costMult = new Decimal(1.3);
	player.thinkers[4].costMult = new Decimal(1.35);
	player.thinkers[5].costMult = new Decimal(1.375);
	player.thinkers[6].costMult = new Decimal(1.4);
	player.thinkers[7].costMult = new Decimal(1.425);
	player.thinkers[8].costMult = new Decimal(1.45);
	player.thinkers[9].costMult = new Decimal(1.475);
	player.creations = player.creations.add(1);
}

function start() {
	setInterval(gameLoop, 33);
	load();
}
function showTab(tab) {
	let tabs = document.getElementsByClassName("tab");
	for(let i = 0; i < tabs.length; i++) {
		tabs[i].style.display = "none";
	}
	get(tab).style.display = "";
}
function format(number,int=false) {

	let power;
	let matissa;
	let mag;
	if (number instanceof Decimal) {
		power = number.e;
		matissa = number.mantissa;
		mag = number.mag
        } else {
		matissa = number / Math.pow(10, Math.floor(Math.log10(number)));
		power = Math.floor(Math.log10(number));
        }

	if(power < 3) {
		if(int) {
			return (matissa*Math.pow(10,power)).toFixed(0);
		} else {
			return (matissa*Math.pow(10,power)).toFixed(2);
		}
	} if (number.layer === 0 || number.layer === 1) {
		matissa = matissa.toFixed(2);
		return matissa + "e" + power;
	} else {
		if(mag) {
			mag = mag.toFixed(2);
		}
		if (number.layer <= 5) {
			return (number.sign === -1 ? "-" : "") + "e".repeat(number.layer) + mag;
		}
		else {
			return (number.sign === -1 ? "-" : "") + "(e^" + number.layer + ")" + mag;
		}
	}
}
