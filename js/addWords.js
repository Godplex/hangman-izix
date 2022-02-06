
save.addEventListener('click', function () {
    let word = addText.value.toUpperCase();
    if (word.trim()) {
        if (word.length <= 8) {
            localWords.push(word);
            localStorage.setItem('localWords', JSON.stringify(localWords));
            successAlert('Word added correctly.');
        } else {
            errorAlert('Add word less than 8 digits.');
        }
    } else {
        errorAlert('Add a word.');
    }
});

