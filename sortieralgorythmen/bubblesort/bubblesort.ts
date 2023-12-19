const swap = (myArr: number[], index1: number, index2: number) => {
  const numBackup = myArr[index1];
  myArr[index1] = myArr[index2];
  myArr[index2] = numBackup;
};

const bubbleSort = (myArr: number[]): number[] => {
  for (let i = 0; i < myArr.length - 1; i++) {
    let change: boolean = false;
    for (let j = 0; j < myArr.length - 1; j++) {
      console.log(myArr[j]);
      if (myArr[j] > myArr[j + 1]) {
        swap(myArr, j, j + 1);
        change = true;
      }
    }
    if (!change) break;
  }
  return myArr;
};

console.log(bubbleSort([1, 200, 23, 12, 13, 300, 10, 11, 200, 14, 100, 37]));
