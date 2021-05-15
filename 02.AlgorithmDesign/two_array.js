function intersection(arr1, arr2) {
  let temp = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        temp.push(arr1[i]);
      }
    }
  }
  return temp;
}

let arr1 = [15, 3, 6, 8, 24, 16];
let arr2 = [11, 3, 9, 6, 15, 8];
console.log(intersection(arr1, arr2));
