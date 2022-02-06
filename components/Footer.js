
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<footer class="copyright-text text-center text-dark pt-5">
      Copyright © 2022 - All rights reserved by Julian David Rincon Espinosa.
      <div class="row pt-5">
        <div class="col-4">
          <a href="https://www.linkedin.com/in/izix/" target="_blank" class="text-decoration-none text-white"><i
              class="fab fa-linkedin fa-2x"></i>
            <p class="d-none d-lg-block">LinkedIn</p>
          </a>
        </div>
        <div class="col-4">
          <a href="https://portfolio-izix.herokuapp.com/" target="_blank" class="text-decoration-none text-white"><i
              class="fas fa-suitcase fa-2x"></i>
            <p class="d-none d-lg-block">Portafolio</p>
          </a>
        </div>
        <div class="col-4">
          <a href="https://github.com/Godplex" target="_blank" class="text-decoration-none text-white"><i
              class="fab fa-github-square fa-2x"></i>
            <p class="d-none d-lg-block">GitHub</p>
          </a>
        </div>
      </div>
    </footer>`;
    }

}

window.customElements.define("footer-component", Footer);