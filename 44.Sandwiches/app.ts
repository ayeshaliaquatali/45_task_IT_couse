#! /usr/bin/env node
console.log("By Miss Ayesha");

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of 
// arguments each time.

function make_sndwich(...items:string[]){
    console.log("\n Making a sandwich with the following items:\n");
    items.forEach(singleItem =>
        console.log(singleItem)
    )
    console.log("\n Now enjoy the sandwich\n");
    
}
make_sndwich("Bread","Better")
make_sndwich("Mayo","Egg")
make_sndwich("Bread","Better","Chicken","Tomato","Mayo","Cheese","Egg")


