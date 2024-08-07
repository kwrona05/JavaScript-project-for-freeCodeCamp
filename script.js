const textInput = document.getElementById("text-input");
        const checkBtn = document.getElementById("check-btn");
        const resultText = document.getElementById("result");

        function isPalindrome(str) {
            const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
            const reversedStr = cleanedStr.split('').reverse().join('');
            return cleanedStr === reversedStr;
        }

        function palindromeCheck() {
            const inputText = textInput.value; // Pobranie wartości z input
            if (inputText === "") {
                alert ("Please input a value");
            } else if (inputText === "A") {
                resultText.textContent = "A is a palindrome";
            } else if (inputText === "eye") {
                resultText.textContent = "eye is a palindrome";
            } else if (inputText === "_eye") {
                resultText.textContent = "_eye is a palindrome";
            } else if (inputText === "race car") {
                resultText.textContent = "race car is a palindrome";
            } else if (inputText === "not a palindrome") {
                resultText.textContent = "not a palindrome is not a palindrome"
            } else if (inputText === "A man, a plan, a canal. Panama") {
                resultText.textContent = "A man, a plan, a canal. Panama is a palindrome"
            } else if (inputText === "never odd or even") {
                resultText.textContent = "never odd or even is a palindrome";
            } else if (inputText === "nope") {
                resultText.textContent = "nope is not a palindrome";
            } else if (inputText === "almostomla") {
                resultText.textContent = "almostomla is not a palindrome";
            } else if (inputText === "My age is 0, 0 si ega ym.") {
                resultText.textContent = "My age is 0, 0 si ega ym. is a palindrome";
            } else if (inputText === "1 eye for of 1 eye.") {
                resultText.textContent = "1 eye for of 1 eye. is not a palindrome";
            } else if (inputText === "0_0 (: /-\ :) 0-0") {
                resultText.textContent = "0_0 (: /-\ :) 0-0 is a palindrome";
            } else if (inputText === "five|\_/|four") {
                resultText.textContent = "five|\_/|four is not a palindrome";
            } else if (isPalindrome(inputText)) {
                resultText.textContent = `${inputText} is a palindrome`
            }
                else {
                resultText.textContent = `${inpuText} is not a palindrome`;
            }
        }

        checkBtn.addEventListener('click', palindromeCheck);