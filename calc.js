var inputs = [];
var currentFunction = "";
var result = 0;

function setDisplay(x){
    $("#display").val(x);
}

function clear(){
    inputs = [];
    result = "";
    $(".display").text("");
   }
//function clear()

function divide(dividend,divisor) {
    //var results = 0;
    if (dividend === 0 && divisor === 0)
        return NaN;

    if (dividend === 0)
        return 0;

    if (divisor === 0)
        return dividend > 0 ? Infinity : -Infinity;

    var neg = dividend * divisor < 0;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    for (var i = 0; dividend >= divisor; ++i)
        dividend -= divisor;

    return neg ? -i : i;

}

function subtract(op1,op2) {
    if (op1 > op2) 
    return op1 - op2;

    if (op1 < op2)
    return op1 - op2
}

function evaluate()
{
    //debugger;
    switch(currentFunction) {
        case "add":
            for(var i =0; i < inputs.length; i++)
            {
                result += inputs[i];
            }
        break;
        case "multiply":
            var temp = 1;
            for(var i =0; i < inputs.length; i++)
            {
                temp *= inputs[i];
            }
            result = temp;
        break;
        case "subtract":
            result = subtract(inputs[0],inputs[1]);
            
        break;
        case "divide":
            result = divide(inputs[0],inputs[1]);
    
        break;
        default:
        
    }

    setDisplay(result);
}

function setNumber(x){
    console.log(x);
    inputs.push(x);

    setDisplay(x);
}

$(document).ready(function(){

    $("#addButton").click(function(){
        currentFunction = 'add';
    });

    $("#multiplyButton").click(function(){
        currentFunction = 'multiply';
    });

    $("#subtractButton").click(function(){
        currentFunction = 'subtract';
    });

    $("#divideButton").click(function(){
        currentFunction = 'divide';
    });

    $("#equalsButton").click(function(){
        evaluate();
    });

    $("#clearButton").click(function(){
        clear();
    });

});