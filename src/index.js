module.exports = function zeros(expression) {
   var arr = expression.split('*'),
   var arrOne = [],
   var arrTwo = [];

  for (var i = 0; i < arr.length; i++) {
    var last = arr[i].length - 1,
        res = 0;
    for (var j = last; j >= last - 1; j--) {
      if (arr[i].charAt(j) === '!') {
        res++;
      }
    }
    var t = (arr[i]).split('!');

    if (res === 1) {
      arrOne.push(t[0]);
    } else {
        arrTwo.push(t[0]);
    }
  }
  var num1 = 0,
  var num2 = 0,
  var num3 = 0;
  if (arrOne.length) {
    for (var i = 0; i < arrOne.length; i++) {
      num1 += parseInt(arrOne[i]/5);
      num1 += parseInt(arrOne[i]/25);
    }
  }
  if (arrTwo.length) {
    for (var i = 0; i < arrTwo.length; i++) {
      if (arrTwo[i] % 2) {
        num2 += Math.ceil(parseInt(arrTwo[i]/5)/2);
        num2 += Math.ceil(parseInt(arrTwo[i]/25)/2);
      } else {
        num3 += (parseInt(arrTwo[i]/10));
        num3 += (parseInt(arrTwo[i]/50));
      }
    }
  }
  if (!(num1 + num3)) return 0;
  return num1 + num2 + num3;
}
