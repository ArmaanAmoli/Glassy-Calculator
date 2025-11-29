// Get the display element
const displayElement = document.getElementById('expression');

// Initialize the expression variable
let expression = '';

// Function to handle button clicks
function handleButtonClick(event) {
    // Get the button value
    const buttonValue = event.target.textContent;

    // Handle different button types
    switch (buttonValue) {
        case 'AC':
            // Clear the expression
            expression = '';
            break;
        case '←':
            // Remove the last character from the expression
            expression = expression.slice(0, -1);
            break;
        case '=':
            // Evaluate the expression and display the result
            try {
                expression = eval(expression).toString();
            } catch (error) {
                expression = 'Error';
            }
            break;
        case '√':
            // Calculate the square root
            try {
                expression = Math.sqrt(eval(expression)).toString();
            } catch (error) {
                expression = 'Error';
            }
            break;
        case 'X':
            // Replace 'X' with '*' for multiplication
            expression += '*';
            break;
        case '÷':
            // Replace '÷' with '/' for division
            expression += '/';
            break;
        case '^':
            // Replace '^' with '**' for exponentiation
            expression += '**';
            break;
        default:
            // Append the button value to the expression
            expression += buttonValue;
    }

    // Update the display
    displayElement.textContent = expression;
}

// Add event listeners to the buttons
document.querySelectorAll('.calcButton').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});