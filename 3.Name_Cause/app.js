#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("By Miss Ayesha");
const personNames = "aYeShA lIaQuAt";
console.log(`Name in Uppercase : ${personNames.toUpperCase()}`);
console.log(`Name in Lowercase : ${personNames.toLowerCase()}`);
//For tital Case ;
let step1 = personNames.split(' ');
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
let step3 = step2.join(' ');
console.log(`Name in tital case :${step3}`);
//SECOND METHOD :
const personName = "ayesha liaquat";
console.log(`Name in Uppercase : ${personName.toUpperCase()}`);
console.log(`Name in lowercase : ${personName.toLowerCase()}`);
let titalcaseName = personName.replace(/\b\w/g, c => c.toUpperCase());
console.log(`Name in titalcase : ${titalcaseName}`);
