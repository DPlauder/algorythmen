const merge = (myArr1: number[], myArr2: number[]) => {
  const mySortedArray: number[] = [];
  let indexArr1: number = 0;
  let indexArr2: number = 0;
  while (myArr1.length > indexArr1 && myArr2.length > indexArr2) {
    if (myArr1[indexArr1] < myArr2[indexArr2]) {
      mySortedArray[indexArr1 + indexArr2] = myArr1[indexArr1];
      indexArr1++;
    } else if (myArr1[indexArr1] > myArr2[indexArr2]) {
      mySortedArray[indexArr1 + indexArr2] = myArr2[indexArr2];
      indexArr2++;
    }
  }
  if (myArr1.length > indexArr1) {
    for (let i = indexArr1; i < myArr1.length; i++) {
      mySortedArray[i + indexArr2] = myArr1[i];
    }
  }
  if (myArr2.length > indexArr2) {
    for (let i = indexArr2; i < myArr2.length; i++) {
      mySortedArray[i + indexArr1] = myArr2[i];
    }
  }
  return mySortedArray;
};
const mergeSort = (myArr: number[]) => {
  if (myArr.length <= 1) return myArr;
  let midValue: number = Math.floor(myArr.length / 2);
  let leftArr: number[] = mergeSort(myArr.slice(0, midValue));
  let rightArr: number[] = mergeSort(myArr.slice(midValue));
  return merge(leftArr, rightArr);
};

console.log(mergeSort([3, 5, 61, 4, 7, 22, 70, 2]));
