const Start = prompt('Please give Start Number:')
const End   = prompt('Please give End Number:')
const Step  = prompt('Please give Step Number:')

// Convert and  Check input for non integers
const StartNumber = Number(Start);
const EndNumber   = Number(End);
const StepNumber  = Number(Step);
let result = "Result"

if ((Number.isInteger(StartNumber+EndNumber+StepNumber) === false)
     || StepNumber == 0)
    {
        result = ("Invalid integer input or step number is 0, please reload and try again") 
    }
else
    {
        result = ("working")
    }
writeOutput(result)



Number.isInteger(StartNumber);
Number.isInteger(EndNumber);
Number.isInteger(StepNumber);

function writeOutput(result){
    const h3Element = document.getElementById ('output')
    h3Element.innerHTML = result
}



