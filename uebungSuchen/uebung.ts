//lineare Suche
/* 
const linearSearch = (arr: number[], numb: number): number =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === numb) return i;
    }
    return -1
}
console.log(linearSearch([1,2,5,7,8,10,9,6], 7)); // 3
console.log(linearSearch([1,2,5,7,8,10,9,6], 3)); // -1

//Binäre Suche
const banarySearch = (arr: number[], value: number) => {
  let left = arr[0];
  let right = arr.length;
  let mid = Math.floor((left + right) / 2);

  if (value > mid) left = mid;
  else if (value < mid) right = mid;

  for (let i = left; i < right; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};
console.log(banarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
 */

// Substing Suche
const searchSubString = (string1: string, string2: string): number => {
  let counter = 0;
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i + j] === string2[j]) {
        if (j === string2.length - 1) counter += 1;
      } else break;
    }
  }
  if (counter) return counter;
  return -1;
};
console.log(searchSubString("bizz bumm bam bang bing bam", "bam"));
