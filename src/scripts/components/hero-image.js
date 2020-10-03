class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero-inner">
          <p class="welcome-text">Selamat datang di</p>
          <h1 class="title">Resto<span>Land</span></h1>
          <p class="tagline">Situs rekomendasi restoran terbaik di seluruh Indonesia</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-image', HeroImage);
