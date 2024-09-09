
let screenInput = ''
let screen = document.querySelector('.display-area')

let calculator = {
    '_display': '',
    get display() {
        return this._display;
    },
    set display(newValue) {
        this._display = newValue;
        screen.textContent = newValue;
    },
    'previousValue': 0,
    'waitingForSecondOperand': false,
    'operator': null,
}



const numberButtons = document.querySelectorAll('.number-button')
numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", handleNumberButtons)
})

//function to accept the target id and add to string
function handleNumberButtons(e) {
    if (calculator.waitingForSecondOperand == false) {
        //Keep writing numbers.
        calculator.display = `${screen.textContent}${e.target.textContent}`
    } else {
        calculator.display = e.target.textContent
        calculator.waitingForSecondOperand = false
    }
}

const operatorButtons = document.querySelectorAll(".operator-button")
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", handleOperatorButtons)
})

function handleOperatorButtons(e) {
    //This is when I've entered number(s) and then an operator.
    if (calculator.operator != null) {
        result = performCalculation(calculator.previousValue, parseFloat(calculator.display), calculator.operator)
        calculator.display = result
        calculator.previousValue = result
    } else {
        calculator.previousValue = parseFloat(calculator.display)
    }
    calculator.operator = e.target.id
    calculator.waitingForSecondOperand = true

}

function performCalculation(previousValue, currentValue, operator) {
    if (operator == 'plus') {
        return previousValue + currentValue
    }
    if (operator == 'subtract') {
        return previousValue - currentValue
    }
    if (operator == 'multiply') {
        return previousValue * currentValue
    }
    if (operator == 'divide' && currentValue != 0) {
        return previousValue / currentValue
    } else {
        calculator.display = 'What the hell?'
    }

}

const equalsButton = document.querySelector("#equals")
equalsButton.addEventListener("click", equals)

function equals(e) {
    handleOperatorButtons(e)
    calculator.operator = null
    calculator.previousValue = 0
    calculator.waitingForSecondOperand = false
}

const clearButton = document.querySelector("#on")
clearButton.addEventListener("click", clear)

function clear() {
    calculator.display = ''
    calculator.operator = null
    calculator.previousValue = 0
    calculator.waitingForSecondOperand = false
}


//select all function buttons and feed ids to function 

//function for function button input

//secondary functions for each button 

//memory functionality 



