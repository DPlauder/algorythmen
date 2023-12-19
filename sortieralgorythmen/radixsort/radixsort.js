"use strict";
const getDigit = (num, index) => {
    return Math.floor((num / Math.pow(10, index)) % 10);
};
const digitCount = (num) => {
    if (num === 0)
        return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};
const mostDigits = (myArr) => {
    let maxDigits = 0;
    for (let i = 0; i < myArr.length; i++) {
        if (digitCount(myArr[i]) > maxDigits)
            maxDigits = digitCount(myArr[i]);
    }
    return maxDigits;
};
const radixSort = (myArr) => {
    for (let i = 0; i < mostDigits(myArr); i++) {
        let num;
        let bucket0 = [];
        let bucket1 = [];
        let bucket2 = [];
        let bucket3 = [];
        let bucket4 = [];
        let bucket5 = [];
        let bucket6 = [];
        let bucket7 = [];
        let bucket8 = [];
        let bucket9 = [];
        for (let j = 0; j <= myArr.length; j++) {
            num = getDigit(myArr[j], i);
            if (num === 0)
                bucket0.push(myArr[j]);
            else if (num === 1)
                bucket1.push(myArr[j]);
            else if (num === 2)
                bucket2.push(myArr[j]);
            else if (num === 3)
                bucket3.push(myArr[j]);
            else if (num === 4)
                bucket4.push(myArr[j]);
            else if (num === 5)
                bucket5.push(myArr[j]);
            else if (num === 6)
                bucket6.push(myArr[j]);
            else if (num === 7)
                bucket7.push(myArr[j]);
            else if (num === 8)
                bucket8.push(myArr[j]);
            else if (num === 9)
                bucket9.push(myArr[j]);
        }
        myArr = [
            ...bucket0,
            ...bucket1,
            ...bucket2,
            ...bucket3,
            ...bucket4,
            ...bucket5,
            ...bucket6,
            ...bucket7,
            ...bucket8,
            ...bucket9,
        ];
    }
    return myArr;
};
console.log(radixSort([200, 23, 1, 12, 13, 300, 10, 1137, 11, 14, 100]));
//# sourceMappingURL=radixsort.js.map