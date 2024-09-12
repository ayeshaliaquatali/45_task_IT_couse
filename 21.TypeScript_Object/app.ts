#! /usr/bin/env node
console.log("By Miss Ayesha");

interface type{
    Name : string ; Age : number ; Profession : string 
}
let OBJ:type = {Name: "Ayesha",Age: 20,Profession: "Student"};

console.log("\n Object Containing Inforation About Me : \n");

console.log(`My name is : ${OBJ.Name}`);
console.log(`I am ${OBJ.Age} year old`);
console.log(`I am a ${OBJ.Profession}`);
