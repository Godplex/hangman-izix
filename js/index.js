let underlines = document.querySelector("#underlines");
let newGame = document.querySelector("#newGame");
let wrongWords = document.querySelector("#wrongWords");
let words = ["ALURA", "ORACLE", "HTML", "CSS", "HANGMAN", "GITHUB", "ONE"];
if (!localStorage.getItem('Words')) {
    localStorage.setItem('Words', JSON.stringify(words));
}
let localWords = JSON.parse(localStorage.getItem('Words'));
let isStart = true;
let hiddenWord = "";
let guessedWord = "";
let lifes = 10;
let writtenLetters = [];
let canvas = document.querySelector('#figure');
let addText = document.querySelector('#addText');
let save = document.querySelector('#save');







