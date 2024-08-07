const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultText = document.getElementById("result");

function palindromeCheck() {
    const textInput = textInput.value
    if (textInput === "") {
        resultText.textContent = "Please input a value"
        resultText = resultText.textContent
    } else if (textInput === "A") {
        resultText.textContent = "A is palindrome"
        resultText = resultText.textContent

    }
}

checkBtn.addEventListener('click', palindromeCheck)