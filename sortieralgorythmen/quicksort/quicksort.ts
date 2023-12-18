const swap3 = (myArr: number[], index1: number, index2: number) => {
  const numBackup = myArr[index1];
  myArr[index1] = myArr[index2];
  myArr[index2] = numBackup;
};

const pivot = (
  myArr: number[],
  start: number = 0,
  end: number = myArr.length - 1
) => {
  let pivotElement: number = myArr[start];
  let pivotIndex: number = start;
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
