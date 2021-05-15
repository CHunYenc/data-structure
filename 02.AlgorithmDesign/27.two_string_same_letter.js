function sameFrequency(string1, string2) {
  let counter_string1 = {};
  let counter_string2 = {};
  for (let i = 0; i < string1.length; i++) {
    if (!counter_string1[`${string1[i]}`]) {
      counter_string1[`${string1[i]}`] = 1;
    } else {
      counter_string1[`${string1[i]}`]++;
    }
  }
  console.log(`counter_string1`, counter_string1);
  for (let i = 0; i < string2.length; i++) {
    if (!counter_string2[string2[i]]) {
      counter_string2[`${string2[i]}`] = 1;
    } else {
      counter_string2[`${string2[i]}`]++;
    }
  }
  console.log(`counter_string2`, counter_string2);
  // can't use objects == objects
  for (let property in counter_string1) {
    if (
      !counter_string2[property] ||
      counter_string2[property] != counter_string1[property]
    ) {
      return false;
    } else {
      return true;
    }
  }
}

a1 = sameFrequency("abbc", "aabc");
a2 = sameFrequency("abba", "abab");
a3 = sameFrequency("aasdebasdf", "adfeebed");
console.log(a1);
console.log(a2);
console.log(a3);
