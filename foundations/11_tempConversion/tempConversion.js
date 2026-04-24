const convertToCelsius = function (t) {
  return parseFloat((((t - 32) * 5) / 9).toFixed(1));
};

console.log(convertToCelsius(100));

const convertToFahrenheit = function (t) {
  return parseFloat((t * 1.8 + 32).toFixed(1));
};

console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
