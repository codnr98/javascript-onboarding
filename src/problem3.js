function problem3(number) {
  var answer = 0;
  let numArray = Array.from(Array(number + 1).keys()).map((x) => x.toString());

  function search369(item) {
    item.split("").forEach((x) => {
      if (x == 3 || x == 6 || x == 9) {
        answer += 1;
      }
    });
  }

  function arrSearcher(arr) {
    arr.forEach((element) => {
      search369(element);
    });
  }
  arrSearcher(numArray);
  return answer;
}

module.exports = problem3;
