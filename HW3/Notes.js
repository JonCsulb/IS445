const numberStr = prompt('Please input your number:')

const number = Number(numberStr)

const result1 = triple(number) * 2
const result2 = dec2bin(number)
result = result1 + '<br>' + result2
writeOutput(result)



function writeOutput(result){
    const h3Element = document.getElementById ('output')
    h3Element.innerHTML = result
}


Ask('Do you want triple or dec2bin?',triple)
    const answer = confirm(question)
    let result
    if (answer) {
            result = yes()

    } else{
            result = no()
    writeOutput(result)

}



function triple(num) {
    return num * 3
}

function dec2bin(dec) {
    return (dec >>>0).toString(2);
    // the >>> rightshift to 0 to remove the sign
    // make it able to handle negative number
}