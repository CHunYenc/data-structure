function intersection(arr1, arr2) {
  let temp = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};
  console.log(arr3);
  for (let i = 0; i < arr3.length; i++) {
    if (counter[arr3[i]]) {
      counter[arr3[i]]++;
    } else {
      counter[arr3[i]] = 1;
    }
  }
  return counter;
}

let arr1 = [15, 3, 6, 8, 24, 16];
let arr2 = [11, 3, 9, 6, 15, 8];
console.log(intersection(arr1, arr2));
