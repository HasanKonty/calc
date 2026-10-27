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

    if (button.classList.contains("digit")) {
        if ( c ==="") {
            a += button.textContent;
        }else {
            b += button.textContent;
        }
    } else if (button.classList.contains("operator")) {
        c = button.textContent;
    } else if ( button.id === "clear"){
        a = "";
        b = "";
        c = "";
    } else if ( button.id === "equal") {
        //call the operate function
    
        //adjust the multiply sign in html 

    }

    const screen = document.querySelector("#screen");
    screen.textContent = a + c + b;

    });
})



// let b = Number(n2);

// let c = operator;