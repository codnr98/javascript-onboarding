function problem4(word) {
  var answer = [];

  function convertFrogLang(el, A, Z) {
    el !== " "
      ? answer.push(String.fromCharCode(Z - (el.charCodeAt(0) - A)))
      : answer.push(" ");
  }
  return answer;
}

module.exports = problem4;
