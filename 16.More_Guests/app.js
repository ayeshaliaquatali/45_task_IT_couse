#! /usr/bin/env node
"use strict";
console.log("By Miss Ayesha");
let Guest_list = ["Hifsa", "Muqaddas", "Irum", "Rani"];
// for (let i=0 ; i<Guest_list.length ; i++){
//    console.log(`Dear ${Guest_list[i]} : \n you are invited to dinner! \n`); 
// }
console.log(`"Unfortunately ${Guest_list[2]} , can't come to dinner."`);
Guest_list[2] = "Saba";
console.log(" \n NEW LIST OF INVITAION, \n");
for (let b = 0; b < Guest_list.length; b++) {
    console.log(`Dear ${Guest_list[b]} : \n you are invited to dinner! \n`);
}
console.log("Good News! We have found a bigger dinner table, so we are inviting to dinner more guest : \n ");
Guest_list.unshift("Junaid");
Guest_list.splice(2, 0, "Aqib");
Guest_list.push("Ghazala");
for (let a = 0; a < Guest_list.length; a++) {
    console.log(`Dear ${Guest_list[a]} : \n you are invited to dinner! \n`);
}
