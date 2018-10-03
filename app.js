const Start = prompt('Please give Start Number:')
const End   = prompt('Please give End Number:')
const Step  = prompt('Please give Step Number:')
const NumArray = [] 
const BinArray = []
// Convert input to number
const StartNumber = Number(Start);
const EndNumber   = Number(End);
const StepNumber  = Number(Step);


if ((Number.isInteger(StartNumber+EndNumber+StepNumber) === false)
     || StepNumber == 0)
    {
        let Result = ("Invalid integer input or step number is 0, please reload and try again") 
        writeOutput(Result)
    }
else
    {   
    ArrayFunction(StartNumber,EndNumber,StepNumber)
      let ResultArray = NumArray.toString();

      let ResultSum = ArraySum(NumArray)

      let ResultBin = BinArray.toString();
      let Result =  'The Generated Array is : ' + ResultArray + '<br>' 
                    + 'The Sum is : ' + ResultSum + '<br>'
                    + 'The Binary of of absolute values are : ' + ResultBin   
      writeOutput(Result)
    }



//                                          ***FUNCTIONS***
// Adds or Subtracts based on StepNum and adds stuff into an array
function ArrayFunction (ArrayStart,ArrayEnd,ArrayStep)
{
    if (ArrayStep>0)
        {
            for(let i = ArrayStart; i <= ArrayEnd; i = i + ArrayStep)
                {
                    NumArray.push(i)
                    BinArray.push(dec2bin(i))
                }
            return NumArray;
            return BinArray;
        }
    else
        {
            for(let i = ArrayStart; i >= ArrayEnd; i = i + ArrayStep)
                {
                    NumArray.push(i) 
                    BinArray.push(dec2bin(i))
                }
            return NumArray;
            return BinArray;
        }
}



// Sum of all the stuff in array using reduce
function ArraySum (NumArray)
{
    const SumArray = NumArray.reduce((total,amount) => total+amount)
    return SumArray;
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



