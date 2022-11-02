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
  while (true) {
    if (checkDuplicate() === true) {
      break;
    }
    answer.forEach((item, index, array) => {
      if (item === array[index + 1]) {
        answer.splice(index, 2);
      }
    });
  }
  return answer.join("");
}

module.exports = problem2;
