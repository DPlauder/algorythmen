"use strict";
const swap2 = (myArr, index1, index2) => {
    const numBackup = myArr[index1];
    myArr[index1] = myArr[index2];
    myArr[index2] = numBackup;
};
const selectionSort = (myArr) => {
    let minimum;
    let swapped;
    for (let i = 0; i < myArr.length; i++) {
        minimum = i;
        swapped = false;
        for (let j = i + 1; j < myArr.length; j++) {
            if (myArr[j] < myArr[minimum]) {
                minimum = j;
                swapped = true;
            }
        }
        if (swapped)
            swap2(myArr, i, minimum);
    }
    return myArr;
};
console.log(selectionSort([1, 200, 23, 12, 13, 300, 10, 11, 200, 14, 100, 37]));
//# sourceMappingURL=selectionsort.js.map