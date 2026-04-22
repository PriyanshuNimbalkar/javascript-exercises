const removeFromArray = function (arr, ...val) {
  return arr.filter((el) => !val.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
