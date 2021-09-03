let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

const array_combine = (keys, values) => {
  const banList = ['boolean', 'object', 'function', 'symbol'];
  let obj = {};

  const maxLength = Math.max(keys.length, values.length);

  for (let i = 0; i < maxLength; i++) {
    if (banList.includes(typeof keys[i])) continue;
    obj[keys[i]] = values[i];
  }

  return obj;
}

let result = array_combine(testData, testData2);

console.log(result);