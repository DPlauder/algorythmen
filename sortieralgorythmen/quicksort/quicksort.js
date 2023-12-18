"use strict";
const swap3 = (myArr, index1, index2) => {
    const numBackup = myArr[index1];
    myArr[index1] = myArr[index2];
    myArr[index2] = numBackup;
};
const pivot = (myArr, start = 0, end = myArr.length - 1) => {
    let pivotElement = myArr[start];
    let pivotIndex = start;
    for (let i = start + 1; i < end; i++) {
        if (pivotElement > myArr[i]) {
            swap3(myArr, start, pivotIndex + 1);
            console.log(pivotIndex, i, start);
            start++;
            pivotIndex = i;
        }
    }
    return pivotIndex;
};
const mynewArr = [62, 3, 5, 61, 4, 7, 22, 70, 2];
console.log(pivot(mynewArr));
console.log(mynewArr);
//# sourceMappingURL=quicksort.js.map