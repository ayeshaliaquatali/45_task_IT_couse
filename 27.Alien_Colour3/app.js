#! /usr/bin/env node
"use strict";
console.log("By Miss Ayesha");
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//1st Version:
let alien_color = "green";
if (alien_color === "green") {
    console.log("\n congratulation! you just earned 5 point:");
}
else if (alien_color === "yellow") {
    console.log("\n congratulation! you just earned 10 point:");
}
else {
    console.log("\n congratulation! you just earned 15 point:");
}
//2nd Version:
alien_color = " yellow";
if (alien_color === "green") {
    console.log("\n congratulation! you just earned 5 point:");
}
else if (alien_color === " yellow") {
    console.log("\n congratulation! you just earned 10 point:");
}
else {
    console.log("\n congratulation! you just earned 15 point:");
}
//3nd Version:
alien_color = "red";
if (alien_color === "green") {
    console.log("\n congratulation! you just earned 5 point:");
}
else if (alien_color === "yellow") {
    console.log("\n congratulation! you just earned 10 point:");
}
else {
    console.log("\n congratulation! you just earned 15 point:");
}
