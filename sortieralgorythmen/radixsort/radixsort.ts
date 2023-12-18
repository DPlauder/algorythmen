const getDigit = (num: number, index: number): number => {
  return Math.floor((num / Math.pow(10, index)) % 10);
};
console.log(getDigit(4978, 0)); //8;
console.log(getDigit(491, 1)); //9;

const digitCount = (num: number): number => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
};
console.log(digitCount(0)); //3
