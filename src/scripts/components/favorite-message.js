class FavoriteMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1>Data tidak tersedia!</h1>
        <p>Silahkan tambahkan restoran favorit di halaman detail restoran</p>
      </div>
    `;
  }
}

customElements.define('favorite-message', FavoriteMessage);
