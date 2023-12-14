"use strict";
/*
function reverseString(text: string): string {
    if(text === "") return "";
    return reverseString(text.substring(1)) + text.charAt(0);
}

//Code Performance mot Big O
const reverseString2 = (text:string) => {return text.split("").reverse().join("")}

const reverseString3 = (text: string): string =>{return [...text].reverse().join("")}


const addUpUpto = (nums: number): number =>{
    let total = 0;
    for(let i = 0;i <= nums; i++){
        total += 1;
    }
    return total;
}
addUpUpto(6);
//
const addUpToGauss = (num: number): number =>{
    return (num* (num + 1) / 2);
}
let time1 = performance.now();
addUpUpto(10);
//addUpToGauss(10);
let time2 = performance.now();

console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds `);
 */
const linearSearch = (arr, numb) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numb)
            return i;
    }
    return -1;
};
console.log(linearSearch([1, 2, 5, 7, 8, 10, 9, 6], 7)); // 3
console.log(linearSearch([1, 2, 5, 7, 8, 10, 9, 6], 3)); // -1
//# sourceMappingURL=wiederholung.js.map