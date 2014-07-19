/**
Cameron Scott
WPF Section 1
7-18-14
Conditionals: Wacky
 */

// Let's figure out what kind of Movie you want to watch

    //Prompt the user to ask what kind of movie do they want to watch
var movie = prompt("What genre of movie do you want to watch?");
if(movie === "horror"){
    //console.log they chose horror
    console.log("Awesome! You chose a movie from the Horror genre!");
    //Alert the user that we didn't catch that
    alert("Awesome! You chose a movie from the Horror genre!");
}else if(movie === "action"){
    //console.log they chose action
    console.log("Classic, you chose a movie from the Action genre!");
    //Alert the user that they chose action
    alert("Classic, you chose a movie from the Action genre!");
}else if(movie === "comedy"){
    //console.log they chose comedy
    console.log("Looks like you're ready to laugh, you chose a movie from the Comedy genre");
    //Alert the user that they chose comedy
    alert("Looks like you're ready to laugh, you chose a movie from the Comedy genre");
}else if(movie === "drama"){
    //console.log they chose drama
    console.log("Are you looking to cry or something? You chose a movie from the Drama genre!");
    //Alert the user that they chose drama
    alert("Are you looking to cry or something? You chose a movie from the Drama genre!");
}else{
    //console.log that we didn't catch that
    console.log("Sorry, we didn't catch that? Are you sure you entered a movie genre?");
    //Alert the user that we didn't catch that
    alert("Sorry, we didn't catch that. Are you sure you entered a movie genre?");
}