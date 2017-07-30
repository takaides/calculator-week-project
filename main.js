let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let equals = document.getElementById("equals");
let decimal = document.getElementById("decimal");
let clear = document.getElementById("clear");
let total = document.getElementById("total");
let totalValue = '';

one.addEventListener('click', function(){
  totalValue += '1';
  console.log(totalValue);
  total.textContent = totalValue;
});

two.addEventListener('click', function(){
  totalValue += '2';
  console.log(totalValue);
  total.textContent = totalValue;
});

three.addEventListener('click', function(){
  totalValue += '3';
  console.log(totalValue);
  total.textContent = totalValue;
});

four.addEventListener('click', function(){
  totalValue += '4';
  console.log(totalValue);
  total.textContent = totalValue;
});

five.addEventListener('click', function(){
  totalValue += '5';
  console.log(totalValue);
  total.textContent = totalValue;
});

six.addEventListener('click', function(){
  totalValue += '6';
  console.log(totalValue);
  total.textContent = totalValue;
});

seven.addEventListener('click', function(){
  totalValue += '7';
  console.log(totalValue);
  total.textContent = totalValue;
});

eight.addEventListener('click', function(){
  totalValue += '8';
  console.log(totalValue);
  total.textContent = totalValue;
});

nine.addEventListener('click', function(){
  totalValue += '9';
  console.log(totalValue);
  total.textContent = totalValue;
});

zero.addEventListener('click', function(){
  totalValue += '0';
  console.log(totalValue);
  total.textContent = totalValue;
});

plus.addEventListener('click', function(){
  totalValue += '+';
  console.log(totalValue);
  total.textContent = totalValue;
});

minus.addEventListener('click', function(){
  totalValue += '-';
  console.log(totalValue);
  total.textContent = totalValue;
});

multiply.addEventListener('click', function(){
  totalValue += 'x';
  console.log(totalValue);
  total.textContent = totalValue;
});

divide.addEventListener('click', function(){
  totalValue += '/';
  console.log(totalValue);
  total.textContent = totalValue;
});

decimal.addEventListener('click', function(){
  totalValue += '.';
  console.log(totalValue);
  total.textContent = totalValue;
});

equals.addEventListener('click', function(){
  totalValue = eval(totalValue.replace(/x/g,'*'));
  console.log(totalValue);
  total.textContent = totalValue;
});

clear.addEventListener('click', function(){
  totalValue = '';
  console.log(totalValue);
  total.textContent = totalValue;
});
