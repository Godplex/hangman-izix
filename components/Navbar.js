
class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<nav class="navbar navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand my-3" href="../index.html">
          <svg class="logoPrincipal" width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.084 23.6529C24.0393 23.9311 23.9304 24.1959 23.7654 24.4275C23.6004 24.659 23.3836 24.8512 23.1313 24.9898C22.6231 25.3086 22.1785 25.468 21.7286 25.6274C20.7705 25.9488 19.7621 26.2702 18.6956 26.643C17.5708 27.0157 16.5624 27.3885 15.6626 27.6585C14.5404 28.0313 13.4738 28.3526 12.4602 28.7254C11.6976 29.0425 10.9812 29.4556 10.3297 29.9544C9.72369 30.4877 9.19486 31.0983 8.75759 31.7695C8.30767 32.515 8.02448 33.4766 8.02448 34.5975C8.02448 36.842 8.58556 38.5491 9.71036 39.6161C10.8325 40.7396 12.9127 41.2718 15.996 41.2718C19.1402 41.2718 21.2733 40.6856 22.4008 39.5107C23.5203 38.3357 24.0814 36.6826 24.0814 34.5487V23.6529H24.084ZM15.9987 0C21.5036 0 25.545 1.01553 28.1254 3.09802C30.7085 5.12908 32 7.74119 32 10.8366V37.2148C32 38.2817 31.7777 39.4567 31.386 40.737C30.989 42.0225 30.2056 43.1949 28.9696 44.2592C27.7919 45.3313 26.1643 46.2389 24.0867 46.933C22.0091 47.6272 19.3149 48 16.0013 48C12.6931 48 9.99355 47.6272 7.91862 46.933C5.84369 46.2389 4.21338 45.3313 3.03565 44.2592C1.94004 43.3001 1.11006 42.089 0.62195 40.737C0.224961 39.4592 0 38.2843 0 37.2174V33.001C0 30.7565 0.616657 28.674 1.85262 26.8563C3.08858 24.9898 4.82739 23.7095 7.07435 22.9073C8.19651 22.5345 9.48805 22.1618 10.9463 21.681C12.4072 21.1976 13.7517 20.7169 15.1015 20.2927C16.4512 19.8633 17.629 19.434 18.6373 19.0586C19.2458 18.8221 19.8639 18.6094 20.49 18.421L21.5009 17.9402C21.8979 17.7268 22.287 17.4055 22.6813 16.9787C23.073 16.5545 23.4091 16.0737 23.6923 15.5389C23.9915 14.9599 24.1457 14.3203 24.1423 13.6724V11.9627C24.1464 11.3361 24.011 10.716 23.7453 10.145C23.523 9.5023 23.073 8.91612 22.4564 8.38393C21.8397 7.84917 20.9955 7.42239 19.9871 7.09845C18.9761 6.78222 17.6316 6.62025 16.1125 6.62025C12.9683 6.62025 10.8907 7.21157 9.76859 8.43535C8.81581 9.50488 8.25473 10.8392 8.14358 12.3329C8.14358 12.6543 7.86304 12.8677 7.52427 12.8677L0.677529 12.9757C0.51489 12.9764 0.358555 12.9146 0.242564 12.8039C0.126572 12.6931 0.0603177 12.5423 0.0582251 12.3844V10.8418C0.0582251 9.3429 0.341411 7.95458 0.958068 6.62025C1.57737 5.28334 2.53279 4.16497 3.82169 3.20086C5.11322 2.24189 6.79911 1.44231 8.81846 0.907552C10.7849 0.26481 13.1986 0 16.004 0H15.9987Z" fill="#0A3871"></path>
      </svg>
          </a>
        </div>
      </nav>`;
  }

}

window.customElements.define("navbar-component", NavBar);