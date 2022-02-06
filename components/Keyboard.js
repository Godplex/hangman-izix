
let keyboard = document.querySelector("#keyboard");

class Keyboard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="btn-group pb-2">
            <button class="btn btn-primary" data-key="Q">Q</button>
            <button class="btn btn-primary" data-key="W">W</button>
            <button class="btn btn-primary" data-key="E">E</button>
            <button class="btn btn-primary" data-key="R">R</button>
            <button class="btn btn-primary" data-key="T">T</button>
            <button class="btn btn-primary" data-key="Y">Y</button>
            <button class="btn btn-primary" data-key="U">U</button>
        </div>
        <div class="btn-group pb-2">
            <button class="btn btn-primary" data-key="I">I</button>
            <button class="btn btn-primary" data-key="O">O</button>
            <button class="btn btn-primary" data-key="P">P</button>
            <button class="btn btn-primary" data-key="A">A</button>
            <button class="btn btn-primary" data-key="S">S</button>
            <button class="btn btn-primary" data-key="D">D</button>
            <button class="btn btn-primary" data-key="F">F</button>
        </div>
        <div class="btn-group pb-2">
            <button class="btn btn-primary" data-key="G">G</button>
            <button class="btn btn-primary" data-key="H">H</button>
            <button class="btn btn-primary" data-key="J">J</button>
            <button class="btn btn-primary" data-key="K">K</button>
            <button class="btn btn-primary" data-key="L">L</button>
            <button class="btn btn-primary" data-key="Z">Z</button>
            <button class="btn btn-primary" data-key="X">X</button>
        </div>
        <div class="btn-group pb-2">
            <button class="btn btn-primary" data-key="C">C</button>
            <button class="btn btn-primary" data-key="V">V</button>
            <button class="btn btn-primary" data-key="B">B</button>
            <button class="btn btn-primary" data-key="N">N</button>
            <button class="btn btn-primary" data-key="M">M</button>
        </div>
    `;
    }

}

window.customElements.define("keyboard-component", Keyboard);

if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    keyboard.classList.remove("d-none");
} else {
    keyboard.classList.add("d-none");
}