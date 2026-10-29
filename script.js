
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
// set a variable to know if a calculation is finished or not
let justEvaluated = false;
//create the constant buttons
const buttons = document.querySelectorAll("button");
//for each button click
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonPressed = button.textContent;
// if button pressed is a digit
    if (button.classList.contains("digit")) {
        // if calculation was finished
        if (justEvaluated){
            //clear a and declare calculation is not finished
            a = "";
            justEvaluated = false;
        }
        //if no operator pressed
        if ( c ==="") {
            //put it in a
            a += button.textContent;
            //if operator pressed
        }else {
            //put it in b
            b += button.textContent;
        }

        // if button pressed is an operator
    } else if (button.classList.contains("operator")) {
        //declare a calculation is not finished
        justEvaluated = false;
        // if an operator is pressed before equal and there was a number input before
        if (c !=="" && b !== "") {
             //make a constant to store the result of operate
        const result = operate(Number(a), Number(b), c);
        // show result in a
            a = String(result);
            b = "";
        } 
        // put button pressed in c
        c = button.textContent;

        //if button pressed is clear, clear a b c and calculation not finished
    } else if ( button.id === "clear"){
        a = "";
        b = "";
        c = "";
        justEvaluated = false;

        // if button pressed is equal
    } else if ( button.id === "equal") {
        
        //if input is not empty
        if(a !== "" && b !== "" && c !== ""){
        
        //make a constant to store the result of operate
        const result = operate(Number(a), Number(b), c);
        //display error if dividing by zero
        if(c === "/" && Number(b) === 0) {
            a = "NOT ALLOWED!!!";
            b = "";
            c = "";
        } else{
        //make a the result to show on screen
             a = String(result.toFixed(2));
             b = "";
             c = "";
        }
        //set calculation to finished
        justEvaluated = true;

    }
}
//screen shows a c b "number operator number" or" result empty empty"
    const screen = document.querySelector("#screen");
    screen.textContent = a + c + b;

    });
})



