console.log("EVEN NUMBER FUNCTION");
function isEven(num){
  if(num % 2 === 0){
    return true;
  }
  else return false;
}

console.log("Number 4 is Even? " + isEven(4));
console.log("Number 21 is Even? " + isEven(21));
console.log("Number 68 is Even? " + isEven(68));
console.log("Number 333 is Even? " + isEven(333));
console.log("---------------------------------------");

console.log("FACTORIAL FUNCTION");
function factorial(num){
  var i = num;
  if(num === 0){
    return 1;
  }

  do{
    i--;
    num = num*i;    
  }while(i > 1)
  return num;
}
console.log("Factorial number 5 is: " + factorial(5));
console.log("Factorial number 2 is: " + factorial(2));
console.log("Factorial number 10 is: " + factorial(10));
console.log("Factorial number 0 is: " + factorial(0));
console.log("---------------------------------------");

console.log("FACTORIAL FUNCTION");
function kebabToSnake(stringa){
  var newStr = stringa.replace('-', '_');
  return newStr;
}
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blash"));
console.log("---------------------------------------");