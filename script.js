neutrinos = new Decimal(0)
building1 = new Decimal(0)
cost1 = new Decimal(10)
multiplier1 = new Decimal(1)
building2 = new Decimal(0)
cost2 = new Decimal(100)
multiplier2 = new Decimal(1)
building3 = new Decimal(0)
cost3 = new Decimal(10000)
multiplier3 = new Decimal(1)
building4 = new Decimal(0)
cost4 = new Decimal(1e6)
multiplier4 = new Decimal(1)
building5 = new Decimal(0)
cost5 = new Decimal(1e9)
multiplier5 = new Decimal(1)
building6 = new Decimal(0)
cost6 = new Decimal(1e13)
multiplier6 = new Decimal(1)
building7 = new Decimal(0)
cost7 = new Decimal(1e18)
multiplier7 = new Decimal(1)
building8 = new Decimal(0)
cost8 = new Decimal(1e24)
multiplier8 = new Decimal(1)
document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
function increment() {
  neutrinos = neutrinos.plus(building1.times(multiplier1)).plus(1);
  building1 = building1.plus(building2.times(multiplier2))
  document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "You have " + building1 + " 1st buildings." + " x" + multiplier1 + ", " + cost1;
document.getElementById("building2").innerHTML = "You have " + building2 + " 2nd buildings." + " x" + multiplier2 + ", " + cost2;
document.getElementById("building3").innerHTML = "You have " + building3 + " 3rd buildings." + " x" + multiplier3 + ", " + cost3;
document.getElementById("building4").innerHTML = "You have " + building4 + " 4th buildings." + " x" + multiplier4 + ", " + cost4;
document.getElementById("building5").innerHTML = "You have " + building5 + " 5th buildings." + " x" + multiplier5 + ", " + cost5;
document.getElementById("building6").innerHTML = "You have " + building6 + " 6th buildings." + " x" + multiplier6 + ", " + cost6;
document.getElementById("building7").innerHTML = "You have " + building7 + " 7th buildings." + " x" + multiplier7 + ", " + cost7;
document.getElementById("building8").innerHTML = "You have " + building8 + " 8th buildings." + " x" + multiplier8 + ", " + cost8;
}
function buy1() {
  if (neutrinos.greaterThan(cost1)) {
    neutrinos = neutrinos.minus(cost1)
    building1 = building1.plus(1)
    multiplier1 = multiplier1.times(1.05)
    cost1 = cost1.times(1.15)
      document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "You have " + building1 + " 1st buildings." + " x" + multiplier1 + ", " + cost1;
document.getElementById("building2").innerHTML = "You have " + building2 + " 2nd buildings." + " x" + multiplier2 + ", " + cost2;
document.getElementById("building3").innerHTML = "You have " + building3 + " 3rd buildings." + " x" + multiplier3 + ", " + cost3;
document.getElementById("building4").innerHTML = "You have " + building4 + " 4th buildings." + " x" + multiplier4 + ", " + cost4;
document.getElementById("building5").innerHTML = "You have " + building5 + " 5th buildings." + " x" + multiplier5 + ", " + cost5;
document.getElementById("building6").innerHTML = "You have " + building6 + " 6th buildings." + " x" + multiplier6 + ", " + cost6;
document.getElementById("building7").innerHTML = "You have " + building7 + " 7th buildings." + " x" + multiplier7 + ", " + cost7;
document.getElementById("building8").innerHTML = "You have " + building8 + " 8th buildings." + " x" + multiplier8 + ", " + cost8;
  }
}
function buy2() {
  if (neutrinos.greaterThan(cost2)) {
    neutrinos = neutrinos.minus(cost2)
    building2 = building2.plus(1)
    multiplier2 = multiplier2.times(1.05)
    cost2 = cost2.times(1.15)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "You have " + building1 + " 1st buildings." + " x" + multiplier1 + ", " + cost1;
document.getElementById("building2").innerHTML = "You have " + building2 + " 2nd buildings." + " x" + multiplier2 + ", " + cost2;
document.getElementById("building3").innerHTML = "You have " + building3 + " 3rd buildings." + " x" + multiplier3 + ", " + cost3;
document.getElementById("building4").innerHTML = "You have " + building4 + " 4th buildings." + " x" + multiplier4 + ", " + cost4;
document.getElementById("building5").innerHTML = "You have " + building5 + " 5th buildings." + " x" + multiplier5 + ", " + cost5;
document.getElementById("building6").innerHTML = "You have " + building6 + " 6th buildings." + " x" + multiplier6 + ", " + cost6;
document.getElementById("building7").innerHTML = "You have " + building7 + " 7th buildings." + " x" + multiplier7 + ", " + cost7;
document.getElementById("building8").innerHTML = "You have " + building8 + " 8th buildings." + " x" + multiplier8 + ", " + cost8;
  }
}
function buy3() {
  if (neutrinos.greaterThan(cost3)) {
    neutrinos = neutrinos.minus(cost3)
    building3 = building3.plus(1)
    multiplier3 = multiplier3.times(1.05)
    cost3 = cost3.times(1.15)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "You have " + building1 + " 1st buildings." + " x" + multiplier1 + ", " + cost1;
document.getElementById("building2").innerHTML = "You have " + building2 + " 2nd buildings." + " x" + multiplier2 + ", " + cost2;
document.getElementById("building3").innerHTML = "You have " + building3 + " 3rd buildings." + " x" + multiplier3 + ", " + cost3;
document.getElementById("building4").innerHTML = "You have " + building4 + " 4th buildings." + " x" + multiplier4 + ", " + cost4;
document.getElementById("building5").innerHTML = "You have " + building5 + " 5th buildings." + " x" + multiplier5 + ", " + cost5;
document.getElementById("building6").innerHTML = "You have " + building6 + " 6th buildings." + " x" + multiplier6 + ", " + cost6;
document.getElementById("building7").innerHTML = "You have " + building7 + " 7th buildings." + " x" + multiplier7 + ", " + cost7;
document.getElementById("building8").innerHTML = "You have " + building8 + " 8th buildings." + " x" + multiplier8 + ", " + cost8;
  }
}
function buy4() {
  if (neutrinos.greaterThan(cost4)) {
    neutrinos = neutrinos.minus(cost4)
    building4 = building4.plus(1)
    multiplier4 = multiplier4.times(1.05)
    cost4 = cost4.times(1.15)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "You have " + building1 + " 1st buildings." + " x" + multiplier1 + ", " + cost1;
document.getElementById("building2").innerHTML = "You have " + building2 + " 2nd buildings." + " x" + multiplier2 + ", " + cost2;
document.getElementById("building3").innerHTML = "You have " + building3 + " 3rd buildings." + " x" + multiplier3 + ", " + cost3;
document.getElementById("building4").innerHTML = "You have " + building4 + " 4th buildings." + " x" + multiplier4 + ", " + cost4;
document.getElementById("building5").innerHTML = "You have " + building5 + " 5th buildings." + " x" + multiplier5 + ", " + cost5;
document.getElementById("building6").innerHTML = "You have " + building6 + " 6th buildings." + " x" + multiplier6 + ", " + cost6;
document.getElementById("building7").innerHTML = "You have " + building7 + " 7th buildings." + " x" + multiplier7 + ", " + cost7;
document.getElementById("building8").innerHTML = "You have " + building8 + " 8th buildings." + " x" + multiplier8 + ", " + cost8;
  }
}
function buy5() {
  if (neutrinos.greaterThan(cost5)) {
    neutrinos = neutrinos.minus(cost5)
    building5 = building5.plus(1)
    multiplier5 = multiplier5.times(1.05)
    cost5 = cost5.times(1.15)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "You have " + building1 + " 1st buildings." + " x" + multiplier1 + ", " + cost1;
document.getElementById("building2").innerHTML = "You have " + building2 + " 2nd buildings." + " x" + multiplier2 + ", " + cost2;
document.getElementById("building3").innerHTML = "You have " + building3 + " 3rd buildings." + " x" + multiplier3 + ", " + cost3;
document.getElementById("building4").innerHTML = "You have " + building4 + " 4th buildings." + " x" + multiplier4 + ", " + cost4;
document.getElementById("building5").innerHTML = "You have " + building5 + " 5th buildings." + " x" + multiplier5 + ", " + cost5;
document.getElementById("building6").innerHTML = "You have " + building6 + " 6th buildings." + " x" + multiplier6 + ", " + cost6;
document.getElementById("building7").innerHTML = "You have " + building7 + " 7th buildings." + " x" + multiplier7 + ", " + cost7;
document.getElementById("building8").innerHTML = "You have " + building8 + " 8th buildings." + " x" + multiplier8 + ", " + cost8;
  }
}
function buy6() {
  if (neutrinos.greaterThan(cost6)) {
    neutrinos = neutrinos.minus(cost6)
    building6 = building6.plus(1)
    multiplier6 = multiplier6.times(1.05)
    cost6 = cost6.times(1.15)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "You have " + building1 + " 1st buildings." + " x" + multiplier1 + ", " + cost1;
document.getElementById("building2").innerHTML = "You have " + building2 + " 2nd buildings." + " x" + multiplier2 + ", " + cost2;
document.getElementById("building3").innerHTML = "You have " + building3 + " 3rd buildings." + " x" + multiplier3 + ", " + cost3;
document.getElementById("building4").innerHTML = "You have " + building4 + " 4th buildings." + " x" + multiplier4 + ", " + cost4;
document.getElementById("building5").innerHTML = "You have " + building5 + " 5th buildings." + " x" + multiplier5 + ", " + cost5;
document.getElementById("building6").innerHTML = "You have " + building6 + " 6th buildings." + " x" + multiplier6 + ", " + cost6;
document.getElementById("building7").innerHTML = "You have " + building7 + " 7th buildings." + " x" + multiplier7 + ", " + cost7;
document.getElementById("building8").innerHTML = "You have " + building8 + " 8th buildings." + " x" + multiplier8 + ", " + cost8;
  }
}
function buy7() {
  if (neutrinos.greaterThan(cost7)) {
    neutrinos = neutrinos.minus(cost7)
    building7 = building7.plus(1)
    multiplier7 = multiplier7.times(1.05)
    cost7 = cost7.times(1.15)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "You have " + building1 + " 1st buildings." + " x" + multiplier1 + ", " + cost1;
document.getElementById("building2").innerHTML = "You have " + building2 + " 2nd buildings." + " x" + multiplier2 + ", " + cost2;
document.getElementById("building3").innerHTML = "You have " + building3 + " 3rd buildings." + " x" + multiplier3 + ", " + cost3;
document.getElementById("building4").innerHTML = "You have " + building4 + " 4th buildings." + " x" + multiplier4 + ", " + cost4;
document.getElementById("building5").innerHTML = "You have " + building5 + " 5th buildings." + " x" + multiplier5 + ", " + cost5;
document.getElementById("building6").innerHTML = "You have " + building6 + " 6th buildings." + " x" + multiplier6 + ", " + cost6;
document.getElementById("building7").innerHTML = "You have " + building7 + " 7th buildings." + " x" + multiplier7 + ", " + cost7;
document.getElementById("building8").innerHTML = "You have " + building8 + " 8th buildings." + " x" + multiplier8 + ", " + cost8;
  }
}
function buy8() {
  if (neutrinos.greaterThan(cost8)) {
    neutrinos = neutrinos.minus(cost8)
    building8 = building8.plus(1)
    multiplier8 = multiplier8.times(1.05)
    cost8 = cost8.times(1.15)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "You have " + building1 + " 1st buildings." + " x" + multiplier1 + ", " + cost1;
document.getElementById("building2").innerHTML = "You have " + building2 + " 2nd buildings." + " x" + multiplier2 + ", " + cost2;
document.getElementById("building3").innerHTML = "You have " + building3 + " 3rd buildings." + " x" + multiplier3 + ", " + cost3;
document.getElementById("building4").innerHTML = "You have " + building4 + " 4th buildings." + " x" + multiplier4 + ", " + cost4;
document.getElementById("building5").innerHTML = "You have " + building5 + " 5th buildings." + " x" + multiplier5 + ", " + cost5;
document.getElementById("building6").innerHTML = "You have " + building6 + " 6th buildings." + " x" + multiplier6 + ", " + cost6;
document.getElementById("building7").innerHTML = "You have " + building7 + " 7th buildings." + " x" + multiplier7 + ", " + cost7;
document.getElementById("building8").innerHTML = "You have " + building8 + " 8th buildings." + " x" + multiplier8 + ", " + cost8;
  }
}
