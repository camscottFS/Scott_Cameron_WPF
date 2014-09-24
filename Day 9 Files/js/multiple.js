
 /*
Nick Boruch
WPF 1407
7/25/14
Multiple Functions
 */

//alert("Testing 1,2,3");

//Create two functions
//1st one is for the area of a rectangle
//2nd one is going to find a perimeter of a rectangle


 //Create variables for the givens
 var height = prompt("we are going to find the area and perimeter of a rectangle\nwhat is the height of a rectangle");
 var width = prompt("What is the width:");


 //Function call to the area

 var areaResult = areaRect(height,width);
 //Console the answer
 console.log (areaResult);

//Function call to perimeter
var periResult = periRect(height, width);
 console.log(periResult);


//Create a master console.log

console.log("The rectangle has an area of "+areaResult+" and a perimeter of "+periResult);



 //Function call to our combining function
 var arrayResults = createArray(areaResult,periResult);

 console.log (arrayResults);

 console.log ("The area is "+arrayResults[0]+" the perimeter is "+ arrayResults[1]);


//Create the area function

function areaRect(h,w){

    //Cacl the area
    var area = h*w;

    //Return the area
    return area;
}


 //Create the perimeter function
 function periRect(h,w){

     //Calc the peroimeter
     var peri = 2*h + 2*w;

     //return the perimeter
     return peri;

 }




 //Create a function that wil return multiple values

 function createArray(area,peri){

    //Create an array from the area and the perimeter
     var arrayName = [area,peri];

     //Return the array
     return arrayName;

 }

