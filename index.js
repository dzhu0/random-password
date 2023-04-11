const upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]

const password1 = document.getElementById("password1-el")
const password2 = document.getElementById("password2-el")
let isPasswordGenerated = false

document.getElementById("generate-el").addEventListener("click", () => {
    password1.textContent = generatePassword()
    password2.textContent = generatePassword()
    isPasswordGenerated = true
})

password1.addEventListener("click", () => {copy(password1.textContent)})
password2.addEventListener("click", () => {copy(password2.textContent)})

function copy(text) {
    if (!isPasswordGenerated) return
    navigator.clipboard.writeText(text)
}

function getRandomIndex(num) {
    return Math.floor(Math.random() * num)
}

function generatePassword() {
    const lengthEl = document.getElementById("length-el")
    const characters = createChar()
    let password = ""

    for (let i = 0; i < lengthEl.value; i++) {
        const randomIndex = getRandomIndex(characters.length)
        password += characters[randomIndex]
    }

    return password
}

function createChar() {
    let characters = upperLetter.concat(lowerLetter)

    if (document.getElementById("symbols-el").checked) {
        characters = characters.concat(symbols)
    }

    if (document.getElementById("numbers-el").checked) {
        characters = characters.concat(numbers)
    }

    return characters
}
