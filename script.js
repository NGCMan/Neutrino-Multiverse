neutrinos = new Decimal(0)
building1 = new Decimal(0)
cost1 = new Decimal(10)
multiplier1 = new Decimal(1)
building2 = new Decimal(0)
cost2 = new Decimal(100)
multiplier2 = new Decimal(1)
document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
function increment() {
  neutrinos = neutrinos.plus(building1).plus(1);
  building1 = building1.plus(building2)
  document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";document.getElementById("building1").innerHTML =
"You have " + building1 + " 1st buildings." + " x" + multiplier1 + ", " + cost1;document.getElementById("building2").innerHTML =
"You have " + building2 + " 2nd buildings." + " x" + multiplier2 + ", " + cost2;
}
function buy1() {
  if (neutrinos>=cost1) {
    neutrinos = neutrinos.minus(cost1)
    building1 = building1.plus(1)
    multiplier1 = multiplier1.times(1.05)
    cost1 = cost1.times(1.15)
       document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";document.getElementById("building1").innerHTML =
"You have " + building1 + " 1st buildings." + " x" + multiplier1 + ", " + cost1;document.getElementById("building2").innerHTML =
"You have " + building2 + " 2nd buildings." + " x" + multiplier2 + ", " + cost2;
  }
}
function buy2() {
  if (neutrinos>=cost2) {
    neutrinos = neutrinos.minus(cost2)
    building2 = building2.plus(1)
    multiplier2 = multiplier2.times(1.05)
    cost2 = cost2.times(1.15)
       document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";document.getElementById("building1").innerHTML =
"You have " + building1 + " 1st buildings." + " x" + multiplier1 + ", " + cost1;document.getElementById("building2").innerHTML =
"You have " + building2 + " 2nd buildings." + " x" + multiplier2 + ", " + cost2;
  }
}
