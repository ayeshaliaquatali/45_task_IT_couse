#! /usr/bin/env node
console.log("By Miss Ayesha");


// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

// Version:
let alien_color : string = "green";

if(alien_color==="green"){
    console.log("Congratulation! you just earned 5 point:");
}
else{
    console.log("Congratulation! you just earned 10 point:");
}

//2nd version:
alien_color = "red";
if(alien_color=== "green"){
    console.log("Congratulation! you just earned 5 point:");
}
else{
    console.log("Congratulation! you just earned 10 point:");
}