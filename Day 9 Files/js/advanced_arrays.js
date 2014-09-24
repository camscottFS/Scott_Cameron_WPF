
 /*
Nick Boruch
WPF 1407
7/25/14
Advanced Arrays
 */

//alert("Testing 1,2,3");

//Create an array of fruit

var fruit = ["banana", "pear", "peach", "tomato"];

//Length of the area - aka how many items are in the array
console.log(fruit.length);
console.log(fruit);


//How do we add to the end of the array
fruit[4] = "cherry";
console.log(fruit);


fruit[fruit.length] = "apple";
console.log(fruit);


//Because this is so common - there is a function that does this automatically
// push() - adds to the last open spot in an array
fruit.push("mango");
console.log(fruit);


//To remove the LAST item from an array
//pop() - nothing inside of the ()
//You can catch the item that is removed
var removedFruit =fruit.pop();
console.log(fruit);
console.log(removedFruit);