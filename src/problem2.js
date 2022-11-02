function problem2(cryptogram) {
  let answer = cryptogram.split("");

  function checkDuplicate() {
    let result = true;
    answer.forEach((item, index, array) => {
      if (item === array[index + 1]) {
        result = false;
      }
    });
    return result;
  }
  return answer;
}

module.exports = problem2;
