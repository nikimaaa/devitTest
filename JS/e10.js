let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

const array_unique = (arr) => {
  const set = new Set(arr);
  return Array.from(set);
}

let result = array_unique(testData.concat(testData2));

console.log(result);