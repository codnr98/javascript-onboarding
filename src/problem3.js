function problem3(number) {
  var answer = 0;
  let numArray = Array.from(Array(number + 1).keys()).map((x) => x.toString());

  function arrSearcher(arr) {
    arr.forEach((element) => {
      search369(element);
    });
  }
  return answer;
}

module.exports = problem3;
