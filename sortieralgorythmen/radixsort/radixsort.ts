const getDigit = (num: number, index: number): number => {
  return Math.floor((num / Math.pow(10, index)) % 10);
};

const digitCount = (num: number): number => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
};

const mostDigits = (myArr: number[]): number => {
  let maxDigits: number = 0;
  for (let i = 0; i < myArr.length; i++) {
    if (digitCount(myArr[i]) > maxDigits) maxDigits = digitCount(myArr[i]);
  }
  return maxDigits;
};

const radixSort = (myArr: number[]): number[] => {
  const bucket0: number[] = [];
  const bucket1: number[] = [];
  const bucket2: number[] = [];
  const bucket3: number[] = [];
  const bucket4: number[] = [];
  const bucket5: number[] = [];
  const bucket6: number[] = [];
  const bucket7: number[] = [];
  const bucket8: number[] = [];
  const bucket9: number[] = [];

  for (let i = 0; i < mostDigits(myArr); i++) {
    let arrayIndex: number = 0;
    for (let j = 0; j <= myArr.length - 1; j++) {
      console.log(i, getDigit(myArr[i], i));
      if (getDigit(myArr[j], arrayIndex) === 1) bucket1.push(myArr[j]);
      if (getDigit(myArr[j], arrayIndex) === 2) bucket2.push(myArr[j]);
      if (getDigit(myArr[j], arrayIndex) === 3) bucket3.push(myArr[j]);
      if (getDigit(myArr[j], arrayIndex) === 4) bucket4.push(myArr[j]);
      if (getDigit(myArr[j], arrayIndex) === 5) bucket5.push(myArr[j]);
      if (getDigit(myArr[j], arrayIndex) === 6) bucket6.push(myArr[j]);
      if (getDigit(myArr[j], arrayIndex) === 7) bucket7.push(myArr[j]);
      if (getDigit(myArr[j], arrayIndex) === 8) bucket8.push(myArr[j]);
      if (getDigit(myArr[j], arrayIndex) === 9) bucket9.push(myArr[j]);
    }
    //arrayIndex++;
  }

  console.log(
    bucket0,
    bucket1,
    bucket2,
    bucket3,
    bucket4,
    bucket5,
    bucket6,
    bucket7,
    bucket8,
    bucket9
  );
  return myArr;
};

console.log(radixSort([200, 23, 1, 12, 13, 300, 10, 11, 14, 100, 1137]));
