#! /usr/bin/env node
"use strict";
console.log("By Miss Ayesha");
function create_car(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const my_car = create_car("Toyota", "Collora", { color: "silver", year: "2024" });
console.log(my_car);
