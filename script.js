
//make calculation functions

const add = (a , b) => a + b;

const subtract = (a , b) => a - b;

const multiply = (a ,b) => a * b;

const divide = (a , b) => a / b;


//make the function that picks a calculate function based on button pressed
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
// set the variables to empty
let a = "";
let b = "";
let c = "";
//create the constant buttons
const buttons = document.querySelectorAll("button");
//for each button click
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonPressed = button.textContent;
// if button pressed is a digit
    if (button.classList.contains("digit")) {
        if ( c ==="") {//if no operator pressed
            a += button.textContent;//put it in a
        }else {//if operator pressed
            b += button.textContent;//put it in b
        }
        // if button pressed is an operator put it in c
    } else if (button.classList.contains("operator")) {
        if (c !=="") {// if an operator is pressed before
             //make a constant to store the result of operate
        const result = operate(Number(a), Number(b), c);
        // show result in a
            a = String(result);
            b = "";
        } 
        c = button.textContent;

        //if button pressed is clear, clear a b c 
    } else if ( button.id === "clear"){
        a = "";
        b = "";
        c = "";
        // if button pressed is equal
    } else if ( button.id === "equal") {
        
        //if input is not empty
        if(a !== "" && b !== "" && c !== ""){
        //make a constant to store the result of operate
        const result = operate(Number(a), Number(b), c);
        //make a the rusult to show on screen
             a = String(result.toFixed(2));
             b = "";
             c = "";

    }
}
//screen shows a c b "number operator number" or" result empty empty"
    const screen = document.querySelector("#screen");
    screen.textContent = a + c + b;

    });
})



