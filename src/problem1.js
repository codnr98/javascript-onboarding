function problem1(pobi, crong) {
  //점수 계산기
  function calculator(page, operator) {
    return page
      .toString()
      .split("")
      .map((x) => +x)
      .reduce((previous, current) =>
        operator ? (previous += current) : (previous *= current)
      );
  }
  //두개의 입력값을 비교하여 더 큰값을 리턴
  function diff(a, b) {
    return a === b
      ? { num: a, score: 0 }
      : a > b
      ? { num: a, score: 1 }
      : { num: b, score: 2 };
  }
  //개인 maxScore
  function eachMaxScore(book) {
    let plus = book.map((item) => calculator(item, true));
    let multi = book.map((item) => calculator(item, false));
    let maxLeft = diff(...plus).num;
    let maxRight = diff(...multi).num;
    // console.log(plus, multi);
    // console.log(diff(maxLeft, maxRight));
    return diff(maxLeft, maxRight);
  }

  return diff(eachMaxScore(pobi).num, eachMaxScore(crong).num).score;
}
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
