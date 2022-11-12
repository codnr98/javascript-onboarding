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
  // calculatePushValue함수의 값을 리턴받아 해당 화폐단위와 곱하여 입력값에 차감한다.
  // 그 뒤 화폐의 단위를 한단계 아래 단위로 변경한다.
  function changeUnit(input, cal) {
    let moneyUnit = 50000;
    for (i = 0; i < 9; i++) {
      input -= moneyUnit * cal(input, moneyUnit);
      if (i < 7) {
        if (i % 2 !== 0) {
          moneyUnit /= 2;
        } else {
          moneyUnit /= 5;
        }
      } else {
        moneyUnit /= 10;
      }
    }
  }

  changeUnit(money, calculatePushValue);

  return answer;
}

module.exports = problem5;
