Array.prototype.append = function (item) {
  const newArray = [item, ...this];
  this.length = 0;
  this.push(...newArray);
}

var arr = [1, 2, 3];
arr.append(0);
console.log(arr);