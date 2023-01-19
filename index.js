const upperLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let symbolsEl = document.getElementById("symbols-el")
let numbersEl = document.getElementById("numbers-el")
let lengthEl = document.getElementById("length-el")
let generateEl = document.getElementById("generate-el")
let password1 = document.getElementById("password1-el")
let password2 = document.getElementById("password2-el")
let passwordGenerated = false

generateEl.addEventListener("click", function() {
    password1.textContent = generatePassword()
    password2.textContent = generatePassword()
    passwordGenerated = true
})

password1.addEventListener("click" , function() {
    copy(password1.textContent)
})

password2.addEventListener("click" , function() {
    copy(password2.textContent)
})

function copy(text) {
    if (passwordGenerated) {
        navigator.clipboard.writeText(text)
    }
}

function randomIndexUpTo(num) {
    return Math.floor(Math.random() * num)
}

function generatePassword() {
    let password = ""
    
    let characters = createChar()
    
    for (let i = 0; i < lengthEl.value; i++) {
        password += characters[randomIndexUpTo(characters.length)]
    }
    
    return password
}

function createChar() {
    let characters = upperLetter.concat(lowerLetter)
    
    if (symbolsEl.checked) {
        characters = characters.concat(symbols)
    }
    
    if (numbersEl.checked) {
        characters = characters.concat(numbers)
    }
    
    return characters
}