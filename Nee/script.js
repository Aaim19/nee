let currentCode ="";

function addDigit(digit) {
    if (currentCode.length < 4) {
        currentCode = currentCode + digit;
        updateDisplay();
    }
}

function clearCode() {
    currentCode = "";
    updateDisplay();
}

function updateDisplay() {
    let displayBox = document.getElementById("code-display");

    if (currentCode === "") {
        displayBox.innerText = "_ _ _ _";
    } else {
        let remaining = 4 - currentCode.length;
        let blanks = " _".repeat(remaining);
        displayBox.innerText = currentCode + blanks;
    }
}

function checkPasscode() {
    let secretCode = "1202"; 

    if (currentCode === secretCode) {
        window.location.href = "birthday.html";
    } else {
        alert("Wrong passcode, try again!");
        clearCode();
    }
}