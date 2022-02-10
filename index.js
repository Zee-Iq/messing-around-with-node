/* Understanding the node runtime and it's identifiers */

/* 1. Understanding built in identifier called "global" */

/* creating a constant that returns a random number and rounding up the floating point number to an integer with "ceil" */
/* Assigning the constant luckyNum to--> global.luckyNum = luckyNum --> 
    This allows the program to access the luckyNum from anywhere
*/
const luckyNum = Math.ceil(Math.random() * 100);

global.luckyNum = luckyNum;
console.log("global.luckyNum ", global.luckyNum);


