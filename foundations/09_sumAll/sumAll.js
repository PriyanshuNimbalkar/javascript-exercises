const sumAll = function (...val) {
  if (val.some((a) => typeof a !== "number" && !isNaN(a))) {
    return "ERROR";
  }
  if (val.some((a) => a < 0 || !Number.isInteger(a))) return "ERROR";
  val.sort((a, b) => a - b);
  let total = 0;
  for (let i = val[0]; i <= val[val.length - 1]; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
