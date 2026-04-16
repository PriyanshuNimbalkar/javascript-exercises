const repeatString = function (string, num) {
    let total = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = num; i > 0; i--) {
        total += string;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = repeatString;
