/**
Cameron Scott
WPF Section 1
09/26/2014
Final Exam
 */

var itemCost = prompt("What is the cost of your item?");
if(itemCost == "" && String(itemCost)){
    alert("You either left the prompt blank, or didn't enter a number!");
}
else if(itemCost == Number(itemCost)){
    var discount = prompt("Enter a discount percentage as a whole number:");
}
else if(discount = "" && String(itemCost)){
    alert("You either left the prompt blank, or didn't enter a number!");
}
else if(discount == Number(discount)){
    function discountFunc(){

        var price = itemCost*(discount/100);
        return price;
    }
    var results = discountFunc(itemCost*(discount/100));
}
console.log("The original cost of your item was "+itemCost+", but after a "+discount+"% discount, it is "+results+"!");