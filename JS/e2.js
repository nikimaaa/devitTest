let arrays = [[1, 2, 3], [4, 5], [6]];
array = arrays.reduce((acc, item) => acc.concat(item), []);
console.log(array);