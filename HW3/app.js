const Start = prompt('Please give Start Number:')
const End   = prompt('Please give End Number:')
const Step  = prompt('Please give Step Number:')

// Convert and  Check input for non integers
const StartNumber = Number(Start);
const EndNumber   = Number(End);
const StepNumber  = Number(Step);


if ((Number.isInteger(StartNumber+EndNumber+StepNumber) === false)
     || StepNumber == 0)
    {
        alert("No") 
    }
else
    {
        alert("working")
    }




Number.isInteger(StartNumber);
Number.isInteger(EndNumber);
Number.isInteger(StepNumber);





