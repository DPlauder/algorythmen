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
  let pivotIndex: number;
  let pivotElement: number;
  for (let i = 0; i < myArr.length; i++) {
    pivotElement = myArr[i];
    pivotIndex = i;
    for (let j = 1; j < myArr.length - 1; j++) {
      if (pivotElement > myArr[j]) {
        swap3(myArr, pivotIndex, myArr[j]);
        pivotIndex = j;
      }
    }
  }
  return myArr;
};

console.log(pivot([1, 200, 23, 12]));
