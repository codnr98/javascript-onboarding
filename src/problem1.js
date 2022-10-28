function problem1(pobi, crong) {
  //입력이 왼쪽보다 오른쪽이 더 큰 경우
  function err(page) {
    if (page[1] - page[0] !== 1) {
      return -1;
    }
    return 0;
  }

  //예외사항 처리
  let z = [pobi, crong];
  z = z.map((x) => err(x));

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

  //결과
  // console.log(diff(eachMaxScore(pobi).num, eachMaxScore(crong).num));
  return z.includes(-1)
    ? -1
    : diff(eachMaxScore(pobi).num, eachMaxScore(crong).num).score;
}
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
// 배열을 넣으면
