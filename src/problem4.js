function problem4(word) {
  var answer = [];

  function convertFrogLang(el, A, Z) {
    el !== " "
      ? answer.push(String.fromCharCode(Z - (el.charCodeAt(0) - A)))
      : answer.push(" ");
  }

  word.split("").forEach((el) => {
    el.charCodeAt(0) < 90
      ? convertFrogLang(el, 65, 90)
      : convertFrogLang(el, 97, 122);
  });

  return answer.join("");
}

module.exports = problem4;
