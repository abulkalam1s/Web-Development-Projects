let input = document.getElementById('input-box')
// Returns all element descendants of node that match selectors.
let buttons = document.querySelectorAll('button')  // means ye hame sare button select karke de dega

// input variable for displaying in input box
let string = ""


let buttonArr = Array.from(buttons)
// from :- Creates an array from an array-like object( here from Array it creates an array of all buttons).


// Now we will run a forEach loop on each buttons for responding when button is clicked.

buttonArr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            const expression = string
            string = eval(string)
            input.value = expression + " = " + string
        }
        // Above if code means jab bhi hamara '=' button click hoga to 'string' mathematically evaluate hoga using eval()
        // & the input box will store this evaluated value('string') after the string expression
        
        else if (e.target.innerHTML == 'AC') {
            string = ""
            input.value = string
        }
        // When 'AC' button is clicked all string value will be cleared and set to an empty string.

        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length-1)
            input.value = string
        }
        // When 'DEL' button is clicked the last element should be removed. Therefore the string is set from its substring from 0 to string.length-1.

        else {
            string += e.target.innerHTML + " ";
            input.value = string
        }
        // When numbers button or other operators buttons is clicked it will simply add it to the 'string' with a space " ".
    })
})