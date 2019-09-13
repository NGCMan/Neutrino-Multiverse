neutrinos = bigNumber(0)
building1 = bigNumber(0)
document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
function increment() {
  neutrinos = neutrinos.plus(building1).plus(1);
  document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
}
function buy1() {
  if (neutrinos>=10) {
    neutrinos = neutrinos.minus(10)
    building1 = building1.plus(1) 
       document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";document.getElementById("building1").innerHTML =
"You have " + building1 + " 1st buildings.";
  }
}
