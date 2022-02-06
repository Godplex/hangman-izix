
var ctx = canvas.getContext('2d');

chooseWord();

function chooseWord() {
    hiddenWord = localWords[Math.floor(Math.random() * localWords.length)];
    guessedWord = "";
    lifes = 10;
    underlines.innerHTML = "";
    writtenLetters = [];
    isStart = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    wrongWords.innerHTML = " ";
    for (let i = 0; i < hiddenWord.length; i++) {
        guessedWord += " ";
        let input = document.createElement("input")
        input.type = "text"
        input.disabled = "true"
        input.value = ""
        input.classList.add("text-center")
        underlines.appendChild(input);
    }
}

document.addEventListener("keyup", (e) => {
    let letter = e.key.toUpperCase();
    write(letter);
});

function validateLetters(letter) {
    const pattern = new RegExp('^[A-Z]+$', 'i');
    if (!pattern.test(letter)) {
        return false;
    } else {
        return true;
    }
}

function validateRepeatedLetters(letter) {
    if (!writtenLetters.includes(letter)) {
        writtenLetters.push(letter);
        return true;
    } else {
        return false;
    }
}

newGame.addEventListener("click", function () {
    chooseWord();
});

keyboard.addEventListener('click', (e) => {
    if (e.target.dataset.key != undefined) {
        let letter = e.target.dataset.key;
        write(letter);
    }
});

function write(letter) {
    hiddenWord = hiddenWord.toUpperCase();
    let input = underlines.getElementsByTagName('input');
    let newWord = "";
    if (isStart) {
        if (validateLetters(letter) && lifes != 0 && letter.length == 1 && validateRepeatedLetters(letter)) {
            for (let i = 0; i < hiddenWord.length; i++) {
                if (letter == hiddenWord[i]) {
                    newWord += letter;
                    input[i].value = letter;
                } else {
                    newWord += guessedWord[i];
                }
            }
            if (newWord == guessedWord) {
                lifes--;
                wrongWords.innerHTML += letter + " ";
            }
            guessedWord = newWord;
            if (lifes == 0) {
                confirmAlert(`End of the game. ¡You Lost!<br/>The word was: ${hiddenWord} :c `, 'red');
                isStart = false;
            }
            if (hiddenWord == guessedWord) {
                confirmAlert('¡You won, congratulations! :D', 'green');
                isStart = false;
            }
            draw();
        }
    }
}
