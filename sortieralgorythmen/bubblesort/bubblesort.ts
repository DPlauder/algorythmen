const swap = (myArr: number[], index1: number, index2: number) => {
  const numBackup = myArr[index1];
  console.log("ind1= ", index1, " ind2= ", index2);
  myArr[index1] = myArr[index2];
  myArr[index2] = numBackup;
};

const bubbleSort = (myArr: number[]): number[] => {
  for (let i = 0; i < myArr.length - 1; i++) {
    for (let j = 0; j < myArr.length - 1; j++) {
      if (myArr[j] > myArr[j + 1]) {
        console.log(myArr[j], " > ", myArr[j + 1]);
        swap(myArr, j, j + 1);
      }
    }
  }
  return myArr;
};

console.log(bubbleSort([23, 10, 11, 200, 14, 100, 37]));
