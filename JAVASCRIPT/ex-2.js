function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  let a = 10;
let b = 20;
let max = maxOfTwoNumbers(a, b);
console.log("The maximum of", a, "and", b, "is", max);