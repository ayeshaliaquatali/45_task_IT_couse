#! /usr/bin/env node
console.log("By Miss Ayesha");

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great 
// added to each magician’s name.


function show_magicians(magician:string[]){
    magician.forEach(name => console.log(name)
    );
}

function make_great(magician:string[]){
    return magician.map ( name => `The Great ${name}`)
}

let magician_name = ["Ayesha", "Muqaddas", "Hifsa"]
let copy_magician_name = magician_name.slice()

let copy_great_magician = make_great(copy_magician_name)

console.log("\nOrginial Array\n");

show_magicians(magician_name)

console.log("\nCopy Array \n");

show_magicians(copy_great_magician)













