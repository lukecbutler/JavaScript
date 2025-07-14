// input element
const input = document.getElementById('input') // input variable is the actual element


function checkIfPalindrome() {
    // get original string from user via input value
    let text = input.value;
    text = text.toLowerCase();

    // reverse the string - attempt 2 √
    const reversedText = reverseString(text);

    // compare it to the original string
    if(text === reversedText){
        displayResult(true);
    }
    else{
        displayResult(false);
    }
}

function displayResult(bool){
    result = document.getElementById('result');
    if (bool === true){
        result.innerHTML = "Yes! a Palindrome!";
    }
    else{
        result.innerHTML = "Not a Palindrome!";
    }
}

// input: string
// returns: reversed string
function reverseString(str){
    return str.split("").reverse().join("")
}