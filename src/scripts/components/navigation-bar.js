class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="head-container">
        <div class="logo">
          <a href="#/home">Resto<span>Land</span></a>
        </div>

        <button id="menu" class="hamburger-menu" aria-label="click to show navbar">☰</button>

        <nav id="drawer">
          <ul class="nav-list">
            <li class="nav-item"><a href="#/home">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Favorite</a></li>
            <li class="nav-item"><a href="https://github.com/tosankrisna" target="_blank" rel="noreferrer">About Us</a></li>
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);
