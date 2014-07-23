/**
 Cameron Scott
 WPF Section 1
 7-21-14
 While Loop
*/

var names = ["Scooby", "Shaggy", "Fred", "Velma", "Daphne", "Scrappy"];

console.log(names.length);

for(var i = 0; i < names.length; i++){
    console.log("You solved the case "+names[i]+ "!");
}

var bills = [50, 10, 5, 20, 10];

var total = 0;

for(var j = 0; j < bills.length; j++){
    // total = total + bills[j];
    if(bills[j] > 15){
        total += bills[j];
    }
}
console.log(total);