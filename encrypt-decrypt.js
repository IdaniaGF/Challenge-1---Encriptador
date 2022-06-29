var encryptButton = document.querySelector("#encryptButton");
var decryptButton = document.querySelector("#decryptButton");
var copyButton = document.querySelector("#copyButton");
var openLock = document.querySelector("#padlock-1");
var closedLock = document.querySelector("#padlock-2");
var muneco = document.querySelector("#empty-inputbox");
var originalText = document.querySelector("#input-text");
var processedText = document.querySelector("#display-textbox");
var inputBox = document.querySelector("#input-box");
var error = document.querySelector("#error");
originalText.focus();


// Encrypt

encryptButton.addEventListener("click", function() {
    var validMessage = validate(originalText);

    if (validMessage) {
        encryptedText = originalText.value.replace(/e/g, 'enter');
        encryptedText = encryptedText.replace(/i/g, 'imes');
        encryptedText = encryptedText.replace(/a/g, 'ai');
        encryptedText = encryptedText.replace(/o/g, 'ober');
        encryptedText = encryptedText.replace(/u/g, 'ufat');
        processedText.value = encryptedText;
        showCopyBtn(true);
        padlockAnimation(true);
    } else {
        showCopyBtn(false);
    }
})

// Decrypt 

decryptButton.addEventListener("click", function() {
    var validMessage = validate(originalText);

    if (validMessage) {
        decryptedText = originalText.value.replace(/enter/g, 'e');
        decryptedText = decryptedText.replace(/imes/g, 'i');
        decryptedText = decryptedText.replace(/ai/g, 'a');
        decryptedText = decryptedText.replace(/ober/g, 'o');
        decryptedText = decryptedText.replace(/ufat/g, 'u');
        processedText.value = decryptedText;
        showCopyBtn(true);
        padlockAnimation(false);
    } else {
        showCopyBtn(false);
        console.log(error);
    }
})

// Copy

copyButton.addEventListener("click", function() {
    copiedText = processedText.value;
    navigator.clipboard.writeText(copiedText);
    originalText.value = "";
    processedText.value = "";
    originalText.focus();
    muneco.classList.remove("hideElement");
    showCopyBtn(false);
})

//validate input

function validate(originalText) {
    var originalTextValidation = originalText.value.replace(/\s+/g, '');
    const patternLowercase = new RegExp(/^[a-z]+$/);

    if (!patternLowercase.test(originalTextValidation)) {
        var validInput = false;
        muneco.classList.remove("hideElement");
        processedText.classList.add("hideElement");

        if (originalText.value.length == 0) {
            error.textContent = "No message found";
        } else {
            error.textContent = "Invalid text, check the characters of your message";
        }

    } else {
        validInput = true;
        error.textContent = "";
        muneco.classList.add("hideElement");
        processedText.classList.remove("hideElement");
    }
    return validInput;
}


function showCopyBtn(showbtn) {
    if (showbtn) {
        copyButton.classList.remove("hideElement");
    } else {
        copyButton.classList.add("hideElement");
    }
}

function padlockAnimation(animation) {
    if (animation) {
        openLock.classList.add("hideElement");
        closedLock.classList.remove("hideElement");
    } else {
        openLock.classList.remove("hideElement");
        closedLock.classList.add("hideElement");
    }
}