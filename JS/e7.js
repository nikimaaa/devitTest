let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

const array_find = (arr, query) => {
  if (typeof query === 'object') return arr.filter((item) => query.test(item));
  return arr.filter((item) => item === query);
}

let result = array_find(testData, /^raf.*/i) // ["Rafshan"]
let result2 = array_find(testData, "Rafshan") // ["Rafshan"]

console.log(result);
console.log(result2);