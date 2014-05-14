/*
Cameron Scott
WPF Section 1
May 14 2014
Conditions Worksheet
 */

var grade = prompt("Please enter your grade:");

if(grade > 95) {
    console.log(+grade + " is an A+");
}else{
}
if(grade < 95){
    console.log(+grade+" is an A");
}else{
    if(grade > 85){
        console.log(+grade+" is an B+");
    }else{
        if(grade < 85){
            console.log(+grade+" is an B");
        }else{
            if(grade > 75){
                console.log(+grade+" is an C+");
            }else{
                if(grade < 75){
                    console.log(+grade+" is an C");
                }else{
                    if(grade < 70){
                        console.log(+grade+" is an F");
                    }else{
                    }
                }
            }
        }
    }
}