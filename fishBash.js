function fishBash(num) {
  const result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      result.push("fish bash");
    } else if (i % 5 === 0) {
      result.push("bash");
    } else if (i % 3 === 0) {
      result.push("fish");
    } else {
      result.push(i);
    }
  }
  return result;
}

module.exports = fishBash;