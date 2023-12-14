"use strict";
const swap = (myArr, index1, index2) => {
    const numBackup = myArr[index1];
    myArr[index1] = myArr[index2];
    myArr[index2] = numBackup;
    return myArr;
};
const bubbleSort = (myArr) => {
    for (let i = 0; i < myArr.length; i++) {
        for (let j = 0; j < myArr.length - 1; j++) {
            if (myArr[j] > myArr[j + 1])
                myArr = swap(myArr, i, j);
        }
    }
    return myArr;
};
console.log(bubbleSort([23, 10, 14, 37, 24]));
//# sourceMappingURL=bubblesort.js.map