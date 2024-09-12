#! /usr/bin/env node
"use strict";
console.log("By Miss Ayesha");
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "large", printMessage = "I Love typescript") {
    console.log(`Creating a ${size} with ${printMessage} print on short`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I Love Javascript");
