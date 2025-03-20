document.getElementById("check-btn").addEventListener("click", function() {
    let inputText = document.getElementById("text-input").value;
    let resultElement = document.getElementById("result");

    if (!inputText) {
        alert("Please input a value.");
        return;
    }
    let processedText = inputText.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let reversedText = processedText.split('').reverse().join('');

    if (processedText === reversedText) {
        resultElement.textContent = `${inputText} is a palindrome.`;
    } else {
        resultElement.textContent = `${inputText} is not a palindrome.`;
    }
});