const merge = (myArr1: number[], myArr2: number[]) => {
  const mySortedArray: number[] = [];
  let indexArr1: number = 0;
  let indexArr2: number = 0;
  while (myArr1.length > indexArr1 && myArr2.length > indexArr2) {
    if (myArr1[indexArr1] < myArr2[indexArr2]) {
      mySortedArray.push(myArr1[indexArr1]);
      indexArr1++;
    } else if (myArr1[indexArr1] > myArr2[indexArr2]) {
      mySortedArray.push(myArr2[indexArr2]);
      indexArr2++;
    }
  }
  if (myArr1.length > indexArr1) {
    for (let i = indexArr1; i < myArr1.length; i++) {
      mySortedArray.push(myArr1[i]);
    }
  }
  if (myArr2.length > indexArr2) {
    for (let i = indexArr2; i < myArr2.length; i++) {
      mySortedArray.push(myArr2[i]);
    }
  }
  return mySortedArray;
};

console.log(merge([3, 5, 6], [1, 4]));
