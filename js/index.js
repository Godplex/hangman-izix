let underlines = document.querySelector("#underlines");
let newGame = document.querySelector("#newGame");
let wrongWords = document.querySelector("#wrongWords");
let words = ["ALURA", "ORACLE", "HTML", "CSS", "HANGMAN", "GITHUB", "ONE"];
if (!localStorage.getItem('localWords')) {
    localStorage.setItem('localWords', JSON.stringify(words));
}
let localWords = JSON.parse(localStorage.getItem('localWords'));
let isStart = true;
let hiddenWord = "";
let guessedWord = "";
let lifes = 9;
let writtenLetters = [];
let canvas = document.querySelector('#figure');
let addText = document.querySelector('#addText');
let save = document.querySelector('#save');







