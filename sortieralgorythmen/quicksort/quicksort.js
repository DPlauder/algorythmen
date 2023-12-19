"use strict";
const swap3 = (myArr, index1, index2) => {
    const numBackup = myArr[index1];
    myArr[index1] = myArr[index2];
    myArr[index2] = numBackup;
};
const pivot = (myArr, start = 0, end = myArr.length - 1) => {
    let pivotIndex;
    let pivotElement;
    for (let i = 0; i < myArr.length; i++) {
        pivotElement = myArr[i];
        pivotIndex = i;
        for (let j = 1; j < myArr.length - 1; j++) {
            if (pivotElement > myArr[j]) {
                swap3(myArr, pivotIndex, myArr[j]);
                pivotIndex = j;
            }
        }
    }
    return myArr;
};
console.log(pivot([1, 200, 23, 12]));
//# sourceMappingURL=quicksort.js.map