
 /*
Nick Boruch
WPF 1407
7/25/14
Procedures
 */

//alert("Testing 1,2,3");


//this is a basic function

function calcAreaFunc(width,height){

    var area = width*height;
    return area;
}


 //Function call - remember to catch the returned value

var results= calcAreaFunc(6,7);

 console.log(results);


 //This is a basic procedure
 //Just a list of steps to do

 function calcAreaProc(width,height){

     var area= width*height;
     console.log(area)

 }

 //Function call the procedure
 calcAreaProc(5,9);

