$(document).ready(function() {

    // Creating var of current output bar.
    let outputBar = $('#output');
    // Declaring new var for value of current output when
    // an .operator btn is clicked
    let firstInput = 0.00;
    // declaring new var for value of second output
    let secondOutput = 0.00;
    // declaring var for opreator value 
    let operatorValue = 0;

    //creating an onclick function when one of the numbers or
    // when .(dot) is clicked  
    $('.numbers').click(function() {

        //creating var for the value of btn pressed
        let btnNumberValue = $(this).text();     

        // checking if current value of output bar is 0
        // if true set to empty stirng
        if (outputBar.text() === '0' && btnNumberValue != '.'){ 
            outputBar.text('');
        }
        

        // appending the value of the pressed btn to the current output bar
        outputBar.append(btnNumberValue);   
        
    })

    // when an operator is clicked...
    $('.operator').click( function() {
        
        // creating var and storing value for the operator pressed 
        let typeOfOperator = $(this).text();

        // when an operator is clicked it stores current value
        // of #outputBar as a new var
        firstInput = $('#output').text();
        // firstInput = parseInt(firstInput);

        // creating a function to to test the type of 
        // operator and store its value in operatorValue var
        const doSomeMath = operator => {
            if (operator === '+') {
                operatorValue = '+';
            } else if (operator === '-'){
                operatorValue = '-';
            } else if (operator === '*') {
                operatorValue = '*';
            } else if (operator === '/') {
                operatorValue = '/';
            }
        }
        // Calling doSomeMathFunction
        doSomeMath(typeOfOperator);

        // Setting #outputBar back to 0.
        outputBar.text('0');
        console.log(firstInput);
        console.log(outputBar);
    })

    // When = is clicked...
    $('#btnEnter').click( function() {
        
        // Storing value of current output to secondOutput.
        secondOutput = $('#output').text();
        // Converting first and second output into numbers.
        firstInput = parseFloat(firstInput);
        secondOutput = parseFloat(secondOutput);

        // Creating a var for the finalValue.
        let finalValue = 0;

        // Creating if else statement to operatorValue.
        if (operatorValue === '+') {
            // If true add.
            // secondOutput = parseInt(secondOutput);
            console.log(firstInput);
            console.log(secondOutput);
            
            finalValue = firstInput + secondOutput;
        } else if (operatorValue === '-') {
            // If true subtract.
            // secondOutput = parseInt(secondOutput);
            finalValue = firstInput - secondOutput;
        } else if (operatorValue === '*') {
            // If true multiply.
            finalValue = firstInput * secondOutput;
        } else if (operatorValue === '/') {
            // If true divide.
            console.log(firstInput);
            console.log(secondOutput);
           finalValue = firstInput / secondOutput;
           console.log(finalValue);
        }

        // firstInput = parseInt(firstInput);
        // secondOutput = parseInt(secondOutput);
        // Outputing the finalValue to outputBar.
        $("#output").text(finalValue);
    })

    // When claer is clicked...
    $('#clear').click( function() {
        // sets firstInput, secondOutput, and outptBar 
        // back to defualt values
        firstInput = 0;
        secondOutput = 0;
        outputBar.text('0');
    })

    // When back arrow is clicked...
    $('#backspace').click( function() {
 
        // Checking to see if outputBar length. 
        if(outputBar.text().length == 1 && outputBar.text() !== '0' ) {

            // If true setting outputBar to '0'.
            outputBar.text('0')

            // Checking to see if outputBar is not = 0.
        } else if (outputBar.text() !== '0'){

            // Creating new var to to store value of of outputBar
            let removeOne =  outputBar.text();
            // Removing the last (letter or number) in string.
            removeOne = removeOne.slice(0,-1)
            // Dispaying the removed outputBar.
            outputBar.text(removeOne);
        }
    })
});



