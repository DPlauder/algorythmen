"use strict";
const insertionSort = (myArr) => {
    let checkNum;
    for (let i = 1; i < myArr.length; i++) {
        checkNum = myArr[i];
        console.log("checknum =", checkNum);
        for (let j = i - 1; j >= 0; j--) {
            console.log("with =", myArr[j]);
            if (myArr[j + 1] < myArr[j]) {
                myArr[j + 1] = myArr[j];
                myArr[j] = checkNum;
            }
            if (checkNum >= myArr[j + 1])
                break;
        }
        console.log(myArr);
    }
    return myArr;
};
console.log(insertionSort([200, 23, 1, 12, 13, 300, 10, 11, 14, 100, 37]));
//# sourceMappingURL=insertionsort.js.map