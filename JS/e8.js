let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

const array_skip_until = (array, value) => {
  let delCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) break;
    delCount++;
  }
  return array.slice(delCount, array.length);
}

let result = array_skip_until(testData, 2);
let result2 = array_skip_until(testData, "Rafshan");
let result3 = array_skip_until(testData, "asd");

console.log(result);
console.log(result2);
console.log(result3);