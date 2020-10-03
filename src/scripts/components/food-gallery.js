class FoodGallery extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="gallery content">
        <h1 class="title">Gallery Makanan</h1>
        <div class="image-gallery">
          <img src="../images/gallery/1.jpeg" alt="nasi goreng">
          <img src="../images/gallery/2.jpg" alt="steak">
          <img src="../images/gallery/3.jpg" alt="spaghetti">
          <img src="../images/gallery/4.jpg" alt="hamburger">
          <img src="../images/gallery/5.jpg" alt="sushi">
          <img src="../images/gallery/6.jpg" alt="pizza">
        </div>
      </div>
    `;
  }
}

customElements.define('food-gallery', FoodGallery);
