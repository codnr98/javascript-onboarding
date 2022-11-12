function problem5(money) {
  var answer = [];

  // 입력값을 화폐단위로 나누고 필요한 화폐단위의 갯수를 answer에 저장하고 리턴한다.
  function calculatePushValue(input, unit) {
    if (input / unit >= 1) {
      answer.push(Math.floor(input / unit));
      return Math.floor(input / unit);
    }
    answer.push(0);
    return 0;
  }
  return answer;
}

module.exports = problem5;
