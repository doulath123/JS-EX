
function isfizzBuzz(arg){
    if(typeof arg !== 'number'){
      return ('Nan - Not a Number! Please Input Number');
    }
  
    if((arg % 3 === 0) && (arg % 5 === 0)) {
      return 'FizzBuzz';
    }
  
    if(arg % 3 === 0) {
      return 'Fizz';
    }
  
    if(arg % 5 === 0) {
      return 'Buzz';
    }
  
    else {
      return 'Some odd number entered: ' + arg;
    }
  
  }
  
  let checkFizzBuzz1 = isfizzBuzz('one');
  console.log(checkFizzBuzz1);
  
  let checkFizzBuzz2 = isfizzBuzz(true);
  console.log(checkFizzBuzz2);
  
  let checkFizzBuzz3 = isfizzBuzz(19);
  console.log(checkFizzBuzz3);
  
  let checkFizzBuzz4 = isfizzBuzz(30);
  console.log(checkFizzBuzz4);
  
  let checkFizzBuzz5 = isfizzBuzz(20);
  console.log(checkFizzBuzz5);
  