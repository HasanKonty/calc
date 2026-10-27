const add = (a , b) => a + b;

const subtract = (a , b) => a - b;

const multiply = (a ,b) => a * b;

const divide = (a , b) => a / b;

let a = Number(n1);

let b = Number(n2);

let c = operator;

const operate = (a, b, c) => {
    if (c === "+") {
         return add(a, b);

         }else if (c === "-") {
            return subtract(a ,b);

         }else if (c === "*") {
            return multiply(a , b);

         }else if (c === "/") {
            return divide(a , b);
         }
    
    
}