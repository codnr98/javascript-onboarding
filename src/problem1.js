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
  return answer;
}

module.exports = problem1;
