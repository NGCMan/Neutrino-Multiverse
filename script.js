var neutrinos = 1
var building1 = 0
document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
function increment() {
  neutrinos+=building1+1
  document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
}
function buy1() {
  if (neutrinos>=10) {
    neutrinos-=10
    building1++ 
       document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";document.getElementById("building1").innerHTML =
"You have " + building1 + " 1st buildings.";
  }
}
