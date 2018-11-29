// Hw 5 for Event listener
// Hw 4 for DOM XHTML request, fetch
// HW 3 for Array and if function 
// Hw 2 for CSS flexbox layout


var inputNum = prompt("Please enter a number between 5-20")
var userNum = parseInt(inputNum)


if (userNum >= 5 && userNum <= 20) 
    {
    userNum = userNum +1
    console.log("working")
    var leftResult = " "
    var downResult = ""
    var endResult = ""
    for (var i = 0; i < userNum ; i++) {
        for (var j = 0; j < userNum; j++) {

                if(i == 0 && j > 0){
                leftResult += j +' ';
                endResult += j +' ' ;
                } 
                else if(j == 0 && i>0){
                downResult += i + ' ';
                endResult  += i + ' ';
                } 
                else if(i>0 && j>0){
                endResult += (i*j) + ' ';
                }
            }
            endResult += '<br>'
        }

    console.log(endResult);
    document.write(endResult)
    }

else
    {
        console.log("not working")
        document.getElementById("error").textContent ="The valid input is a number between 5 and 20, please refresh your page to start again ";
    }

    
