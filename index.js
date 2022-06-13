document.getElementById("btn").addEventListener("click", display);

var text = '';
var textLength = '';
var textArr = [];
var result = [];

function display() {
    text = document.querySelector("input").value;
    textLength = text.length;
    if(textLength == 1)
    {
        if(isNaN(parseInt(text, 10)) == false)
        {
            first(text);
            console.log(textArr);
            textArr = [];
        }
    
    } else if(textLength == 2) {
        if(isNaN(parseInt(text, 10)) == false)
        {
            let num = parseInt(text);
            if(num < 20) 
            {
                first(`${num}`);
                console.log(textArr);
                textArr = [];
            } else if (num >= 20 && text.substring(2,1) == 0) {
                second(`${num}`);
                console.log(textArr);
                textArr = [];
            } else if(num >= 20 && text.substring(2,1) != 0) {
                let num1 = parseInt(text.substring(0,1))*10;
                let num2 = parseInt(text.substring(2,1));
                second(`${num1}`);
                first(`${num2}`);
                console.log(textArr);
                textArr = [];
            }
        }         
     } else {
        console.log("The text string has a length greater than 1.")
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
