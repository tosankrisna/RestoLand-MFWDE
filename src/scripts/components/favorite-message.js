class FavoriteMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1>Data tidak tersedia!</h1>
        <p class="fav-page-msg">Data restaurant favorit tidak ditemukan</p>
      </div>
    `;
  }
}

customElements.define('favorite-message', FavoriteMessage);
