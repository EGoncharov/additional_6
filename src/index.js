module.exports = function zeros(expression) {
   var arr = expression.split('*'),
   one = [],
   two = [];

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
      one.push(t[0]);
   } else {
       two.push(t[0]);
   }
  }
   
  var num1 = 0;
  var num2 = 0;
  var num3 = 0;
   
  if (one.length) {
    for (var i = 0; i < one.length; i++) {
      num1 += parseInt(one[i]/5);
      num1 += parseInt(one[i]/25);
    }
  }
   
  if (two.length) {
    for (var i = 0; i < two.length; i++) {
      if (two[i] % 2) {
        num2 += Math.ceil(parseInt(two[i]/5)/2);
        num2 += Math.ceil(parseInt(two[i]/25)/2);
      } else {
        num3 += (parseInt(two[i]/10));
        num3 += (parseInt(two[i]/50));
      }
    }
  }
   
  if (!(num1 + num3)) return 0;
  return num1 + num2 + num3;
}
