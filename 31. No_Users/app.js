#! /usr/bin/env node
"use strict";
console.log("By Miss Ayesha");
let usernames = ["Admin", "Ayesha", "Hifsa", "Muqaddas", "Rani"];
usernames = [];
if (usernames.length === 0) {
    console.log(" We need to find some users!");
}
else {
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
        }
    }
}
