const getDigit = (num: number, index: number): number => {
  return Math.floor((num / Math.pow(10, index)) % 10);
};
const digitCount = (num: number): number => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (myArr: number[]): number => {
  let maxDigits: number = 0;
  for (let i = 0; i < myArr.length; i++) {
    if (digitCount(myArr[i]) > maxDigits) maxDigits = digitCount(myArr[i]);
  }
  return maxDigits;
};

const radixSort = (myArr: number[]): number[] => {
  for (let i = 0; i < mostDigits(myArr); i++) {
    let num: number;
    let bucket0: number[] = [];
    let bucket1: number[] = [];
    let bucket2: number[] = [];
    let bucket3: number[] = [];
    let bucket4: number[] = [];
    let bucket5: number[] = [];
    let bucket6: number[] = [];
    let bucket7: number[] = [];
    let bucket8: number[] = [];
    let bucket9: number[] = [];
    for (let j = 0; j <= myArr.length; j++) {
      num = getDigit(myArr[j], i);
      if (num === 0) bucket0.push(myArr[j]);
      else if (num === 1) bucket1.push(myArr[j]);
      else if (num === 2) bucket2.push(myArr[j]);
      else if (num === 3) bucket3.push(myArr[j]);
      else if (num === 4) bucket4.push(myArr[j]);
      else if (num === 5) bucket5.push(myArr[j]);
      else if (num === 6) bucket6.push(myArr[j]);
      else if (num === 7) bucket7.push(myArr[j]);
      else if (num === 8) bucket8.push(myArr[j]);
      else if (num === 9) bucket9.push(myArr[j]);
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
