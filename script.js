
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





//where to listen for button click
const buttons = document.querySelectorAll("button");

//for each button click
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonPressed = button.textContent;


    // if button clicked is a digit
    if (button.classList.contains("digit")) {

        // if calculation was FINISHED!!! "or just beginning"
        if (justEvaluated){
            //clear a and declare calculation is not finished (start a new one)
            a = "";
            justEvaluated = false;
        }

        //if no operator clicked
        if ( c ==="") {
            //put clicked button "digit" in a
            a += button.textContent;

        //if operator clicked before
        }else {
            //put clicked button "digit" in b
            b += button.textContent;
        }






    // if button clicked is an operator
    } else if (button.classList.contains("operator")) {

        //set calculation to not finished
        justEvaluated = false;

        // if an operator is clicked before equal and there was a digit input before
        if (c !=="" && b !== "") {

            // store the result of operate
        const result = operate(Number(a), Number(b), c);
            // put result in a
            a = String(result);
            b = "";
        } 
            // put button "operator" clicked in c
        c = button.textContent;







    //if button clicked is clear, clear a b c and set calculation to  not finished i.e starting new one
    } else if ( button.id === "clear"){
        a = "";
        b = "";
        c = "";
        justEvaluated = false;






    // if button pressed is equal
    } else if ( button.id === "equal") {
        
      //and the input is not empty
        if(a !== "" && b !== "" && c !== ""){
        
        //store the result of operate
        const result = operate(Number(a), Number(b), c);

            //put error in a if dividing by zero
        if(c === "/" && Number(b) === 0) {
            a = "NOT ALLOWED!!!";
            b = "";
            c = "";

            //or put result in a otherwise
        } else{
             a = String(result.toFixed(2));
             b = "";
             c = "";
        }
            //and set calculation to finished
        justEvaluated = true;

    }
}
//screen shows a c b "number operator number" or" result blank blank"
    const screen = document.querySelector("#screen");
    screen.textContent = a + c + b;

    });
})



