function add(num1, num2){
    return (num1+num2);
}
function sub(num1,num2){
    return (num1-num2);
}
function div(num1,num2){
    return (num1/num2);
}
function mult(num1,num2){
    return (num1*num2);
}

const operator = prompt("Please enter an operator");
const num1 = parseFloat(prompt("Please enter a the first number "));
const num2 = parseFloat(prompt("Please enter the second number "));

switch (operator){
    case '+':
        console.log(num1 + operator + num2+ ' = ' + add(num1,num2));
        break;
    case '-':
        console.log(num1 + operator + num2+ ' = ' + sub(num1,num2));
        break;
    case '/':
        console.log(num1 + operator + num2+ ' = ' + div(num1,num2));
        break;
    case '*':
        console.log(num1 + operator + num2+ ' = ' + mult(num1,num2)); 
        break;  
}