const add = (a , b) => a + b;

const subtract = (a , b) => a - b;

const multiply = (a ,b) => a * b;

const divide = (a , b) => a / b;



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

let a = "";
let b = "";
let c = "";

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonPressed = button.textContent;

    if
    })
})


// let b = Number(n2);

// let c = operator;