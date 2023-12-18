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
  for (let i = pivotIndex + 1; i <= end; i++) {
    if (pivotElement > myArr[i]) {
      pivotIndex++;
      swap3(myArr, pivotIndex, i);
    }
  }
  swap3(myArr, start, pivotIndex);
  return pivotIndex;
};
const quicksort = (
  myArr: number[],
  left: number = 0,
  right: number = myArr.length - 1
) => {
  if (left < right) {
    const pivotIndex: number = pivot(myArr, left, right);
    quicksort(myArr, left, pivotIndex - 1);
    quicksort(myArr, pivotIndex + 1, right);
  }
  return myArr;
};
console.log(quicksort([62, 3, 5, 61, 7, 4, 12, 8, 11]));
