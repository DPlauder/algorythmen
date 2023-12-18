"use strict";
const swap3 = (myArr, index1, index2) => {
    const numBackup = myArr[index1];
    myArr[index1] = myArr[index2];
    myArr[index2] = numBackup;
};
const pivot = (myArr, start = 0, end = myArr.length - 1) => {
    let pivotElement = myArr[start];
    let pivotIndex = start;
    for (let i = pivotIndex + 1; i <= end; i++) {
        if (pivotElement > myArr[i]) {
            pivotIndex++;
            swap3(myArr, pivotIndex, i);
        }
    }
    swap3(myArr, start, pivotIndex);
    return pivotIndex;
};
const quicksort = (myArr, left = 0, right = myArr.length - 1) => {
    if (left < right) {
        const pivotIndex = pivot(myArr, left, right);
        quicksort(myArr, left, pivotIndex - 1);
        quicksort(myArr, pivotIndex + 1, right);
    }
    return myArr;
};
console.log(quicksort([62, 3, 5, 61, 7, 4, 12, 8, 11]));
//# sourceMappingURL=quicksort.js.map