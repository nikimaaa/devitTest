const cloneDeep = (obj) => {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = typeof obj[key] === 'object' ? cloneDeep(obj[key]) : obj[key];
  }
  return newObj;
}
