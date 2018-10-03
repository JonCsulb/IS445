const Start = prompt('Please give Start Number:')
const End   = prompt('Please give End Number:')
const Step  = prompt('Please give Step Number:')
const NumArray = [] 
// Convert input to number
const StartNumber = Number(Start);
const EndNumber   = Number(End);
const StepNumber  = Number(Step);

// result = ResultArray +  '<br>' + ResultSum + '<br>' + ResultBin






if ((Number.isInteger(StartNumber+EndNumber+StepNumber) === false)
     || StepNumber == 0)
    {
        let ResultError = ("Invalid integer input or step number is 0, please reload and try again") 
    }
else
    {   
        ArrayFunction(StartNumber,EndNumber,StepNumber)
      //  let ResultArray = (NumArray)
      //  let ResultSum
      //  let ResultBin
    }


// writeOutput(result)


// Adds or Subtracts based on StepNum and adds stuff into an array
function ArrayFunction (ArrayStart,ArrayEnd,ArrayStep)
{
    if (ArrayStep>0)
        {
            for(let i = ArrayStart; i <= ArrayEnd; i = i + ArrayStep)
                {
                    NumArray.push(i)
                }
            return NumArray;
        }
    else
        {
            for(let i = ArrayStart; i >= ArrayEnd; i = i + ArrayStep)
                {
                    NumArray.push(i) 
                }
            return NumArray;
        }
}









// Change to binary function
function dec2bin(dec) {
    return (dec >>>0).toString(2);
    // the >>> rightshift to 0 to remove the sign
    // make it able to handle negative number
}




function writeOutput(result){
    const h3Element = document.getElementById ('output')
    h3Element.innerHTML = result
}



