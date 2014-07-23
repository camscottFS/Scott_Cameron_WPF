/**
Cameron Scott
WPF Section 1
7-18-14
Conditionals: Personal
 */

//Let's figure out if you can kill Omniknight with Doom

var omniKnight = prompt("How many HP does Omniknight have?");
var doom = prompt("How many HP does Doom have?");

if(omniKnight > doom){
    console.log("Omniknight wins.");
    alert("Omniknight wins.");
}else if(doom > omniKnight){
    console.log("Doom wins.");
    alert("Doom wins.");
}else{
    console.log("Omniknights HP was "+omniKnight+". Dooms HP was"+doom+".");
}