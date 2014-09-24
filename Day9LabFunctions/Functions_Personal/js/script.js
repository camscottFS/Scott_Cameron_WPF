/*
 Cameron Scott
 WPF Section 1
 09/22/2014
 Functions: Personal
*/

// Figuring out cost of new MacBook Pro vs HP EliteBook and choosing one over the other

alert("Let's choose whether to buy a MacBook Pro or an HP EliteBook");
var choose = prompt("Would you like to buy a MacBook Pro or an HP EliteBook?\nEnter 'MacBook Pro' or 'HP EliteBook'");
if(choose === "MacBook Pro"){
    var macBook = prompt("You chose the MacBook Pro! The price is $2499. Is that ok?\nEnter 'Yes' or 'No'");
        if(macBook === "Yes" || "yes"){
            function macHP(hp,mac){

                var price1 = hp-mac;
                return price1;
            }
            var results1 = macHP(3389,2449);
            alert("You saved $"+results1+" by choosing the MacBook Pro!");
    }
            else{
            // else code here (not needed)
            }
        if(macBook === "No" || "no"){
        alert("Thank you for your interest. We hope you make the decision to buy the MacBook Pro at some point.")
    }
            else{
            // else code here (not needed)
            }
}
if(choose === "HP EliteBook"){
    var hpElite = prompt("You chose the MacBook Pro! The price is $3889. Is that ok?\nEnter 'Yes' or 'No'");
        if(hpElite === "Yes" || "yes"){
            function hpMac(mac,hp){

                var price2 = mac-hp;
                return price2;
            }
            var results2 = hpMac(3389,2449);
            alert("You could have saved $"+results2+" by choosing the MacBook. However, we're glad you chose the HP EliteBook.\nYour total cost is $3389.");
    }
            else{
            // else code here (not needed)
        }
        if(hpElite === "No" || "no"){
            alert("Thank you for your interest. We hope you make the decision to buy the HP EliteBook at some point.")
    }
            else{
            // else code here (not needed)
            }
}
else if(choose === ""){
alert("You didn't enter anything.")
}
else {
// else code here
}