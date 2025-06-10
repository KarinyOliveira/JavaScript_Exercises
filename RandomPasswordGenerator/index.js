// RANDOM PASSWORD GENERATOR

function combinePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%&*_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars+= includeLowercase ? lowercaseChars : "";
    allowedChars+= includeUppercase ? uppercaseChars : "";
    allowedChars+= includeNumbers ? numberChars : "";
    allowedChars+= includeSymbols ? symbolChars : "";

    if(length < 4){
        return `(password length must be at least 4)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to  be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function generatePassword(){
    const passwordLength = Number(document.getElementById("length").value);
    const includeLowercase = document.getElementById("lowerCase").checked;
    const includeUppercase = document.getElementById("upperCase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    const passwd = document.getElementById("password");

    const password = combinePassword(passwordLength, 
                                includeLowercase, 
                                includeUppercase, 
                                includeNumbers, 
                                includeSymbols);

    passwd.textContent = password;
}