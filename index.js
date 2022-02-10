/* Understanding the node runtime and it's identifiers */

/* 1. Understanding built in identifier called "global" */

/* creating a constant that returns a random number and rounding up the floating point number to an integer with "ceil" */
/* Assigning the constant luckyNum to--> global.luckyNum = luckyNum --> 
    This allows the program to access the luckyNum from anywhere
*/
const luckyNum = Math.ceil(Math.random() * 100);

global.luckyNum = luckyNum;
console.log("global.luckyNum = luckyNum; ", global.luckyNum);
/* expected result = global.luckyNum = luckyNum;  86 */

/* 2. Understanding built in identifier called "process" */
/* "process" gives acess to currently running process  */

console.log(process.platform);
/* When running node . -->  expected result = linux */

/* 3. Understanding Node's eventloop and understanding what "non-blocking" means
 */
/* Node implements an eventloop (just like a web browser) -->
        Now node can push off intensive tasks/operations to another thread-->
            This allow Node to keep the main thread free for intensive tasks
                This is why Node is ideal for intensive tasks with high input  output at the same time like real time apps or web servers

*/

/* understanding node's filesystem */

/* importing two functions from the filesystem module */
/* the readFileSynch function will block sp */
const { readFile, readFileSync } = require("fs");

const txt = readFileSync("./hello.txt", "utf-8");
console.log(txt);
console.log("run this ASAP");
/* when this is a large file... the second console log  will take some time to run becuase the txt file is being read
How can this be avoided? --> with a callback --> this will make the code "non-blocking"
*/

readFile('./hello.txt', 'utf-8', (err,txt) => {
    console.log(txt)
})
