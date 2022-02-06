
save.addEventListener('click', function () {
    let word = addText.value.toUpperCase();
    if (word.trim()) {
        if (word.length <= 8 && word.length >= 3) {
            if (!localWords.includes(word)) {
                localWords.push(word);
                localStorage.setItem('Words', JSON.stringify(localWords));
                successAlert('Word added correctly.');
            } else {
                errorAlert('This word is already added in the hangman, enter another word.');
            }
        } else {
            errorAlert('Add a word greater than 3 digits and less than 8 digits.');
        }
    } else {
        errorAlert('Add a word.');
    }
});

