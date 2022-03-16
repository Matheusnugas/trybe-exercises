const testNumber = (num) => {
  if (num < 0) {
    return "negative";
  } else if (num > 0) {
    return "positive";
  } else if (num === 0) {
    return "neutral";
  } else if (typeof num !== "number") {
    return "Only numbers allowed";
  }
};

module.exports = testNumber;
