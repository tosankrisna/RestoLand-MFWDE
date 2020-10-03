class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="loader"></div>
    `;
  }
}

customElements.define('loading-indicator', LoadingIndicator);
