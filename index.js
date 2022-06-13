document.getElementById("btn").addEventListener("click", display);

var text = '';
var textArr = [];
var result = document.getElementById("result");

function display() {
    text = document.querySelector("input").value;
    let num = parseInt(text);

    if(isNaN(num) == false) {
        let numText = num.toString();
        let numLength = numText.length;
        if(numLength == 1)
        {
            first(numText);
            console.log(textArr);
            arrayToString(textArr, result);
            textArr = [];        
        } else if(numLength == 2) {
            let num3 = numText.substring(2,1);
            if(num < 20) 
            {
                first(numText);
                console.log(textArr);
                arrayToString(textArr, result);
                textArr = [];
            } else if (num >= 20 &&  num3 == 0) {
                second(numText);
                console.log(textArr);
                arrayToString(textArr, result);
                textArr = [];
            } else if(num >= 20) {
                let num1 = parseInt(numText.substring(0,1))*10;
                let num2 = parseInt(num3);
                if(num2 != 0)
                {
                    second(`${num1}`);
                    first(`${num2}`);
                    console.log(textArr);
                    arrayToString(textArr, result);
                    textArr = [];
                }
            }
        } else if(numLength == 3) {
            //check first value - use first array, add hundred to array
            //check second value and third value to see if they are 0
            //if they are 0, you're done
            //if the second value isn't 0 and 3rd value is 0, use first array
            //if the third value isn't 0, use the second array
        } else {
            result.innerHTML = "The text string has a length greater than 3.";
            console.log("The text string has a length greater than 3.");
        }
    } else {
        result.innerHTML = "The text string entered is not a number.";
        console.log("The text string entered is not a number.");
        
    }
}

function arrayToString(param, result) {
    result.innerHTML = "";
    for(let i = 0; i < param.length; i++) 
    {
        result.innerHTML += param[i] + " ";
    }
}

function first(key) {
    switch (key) {
        case '1':
            textArr.push("One");
            break;
        case '2':
            textArr.push("Two");
            break;
        case '3':
            textArr.push("Three");
            break;
        case '4':
            textArr.push("Four");
            break;
        case '5':
            textArr.push("Five");
            break;
        case '6':
            textArr.push("Six");
            break;
        case '7':
            textArr.push("Seven");
            break;
        case '8':
            textArr.push("Eight");
            break;
        case '9':
            textArr.push("Nine");
            break;
        case '10':
            textArr.push("Ten");
            break;
        case '11':
            textArr.push("Eleven");
            break;
        case '12':
            textArr.push("Twelve");
            break;
        case '13':
            textArr.push("Thirteen");
            break;
        case '14':
            textArr.push("Fourteen");
            break;
        case '15':
            textArr.push("Fifteen");
            break;
        case '16':
            textArr.push("Sixteen");
            break;
        case '17':
            textArr.push("Seventeen");
            break;
        case '18':
            textArr.push("Eighteen");
            break;
        case '19':
            textArr.push("Nineteen");
            break;
        default:
            break;
    }
}

function second(key) {
    switch (key) {
        case '10':
            textArr.push("Ten");
            break;
        case '20':
            textArr.push("Twenty");
            break;
        case '30':
            textArr.push("Thirty");
            break;
        case '40':
            textArr.push("Forty");
            break;
        case '50':
            textArr.push("Fifty");
            break;
        case '60':
            textArr.push("Sixty");
            break;
        case '70':
            textArr.push("Seventy");
            break;
        case '80':
            textArr.push("Eighty");
            break;
        case '90':
            textArr.push("Ninety");
            break;
        default:
            break;
    }
}
