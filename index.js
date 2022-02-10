/* Understanding the node runtime */

/* 1. Understanding built in identifier called "global" */

/* creating a constant that returns a random number and rounding up the floating point number to an integer with "ceil" */
const luckyNum = (Math.ceil(Math.random()*100))

global.luckyNum=luckyNum
 console.log("global.luckyNum ", global.luckyNum);
