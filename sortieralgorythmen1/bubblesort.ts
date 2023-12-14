const swap = (myArr: number[], index1: number, index2: number) => {
  const numBackup = myArr[index1];
  myArr[index1] = myArr[index2];
  myArr[index2] = numBackup;
  return myArr;
};

const bubbleSort = (myArr: number[]): number[] => {
  for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr.length - 1; j++) {
      if (myArr[j] > myArr[j + 1]) myArr = swap(myArr, i, j);
    }
  }
  return myArr;
};

console.log(bubbleSort([23, 10, 14, 37, 24]));
