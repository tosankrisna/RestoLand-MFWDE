class FoodGallery extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="gallery content">
        <h1 class="title">Gallery Makanan</h1>
        <div class="image-gallery">
          <img src="./images/1-large.jpg"
            srcset="./images/1-small.jpg 480w, ./images/1-large.jpg 800w"
            sizes="(max-width: 600px) 480px, 800px"
            alt="nasi goreng">
          <img src="./images/2-large.jpg"
            srcset="./images/2-small.jpg 480w, ./images/2-large.jpg 800w"
            sizes="(max-width: 600px) 480px, 800px"
            alt="steak">
          <img src="./images/3-large.jpg"
            srcset="./images/3-small.jpg 480w, ./images/3-large.jpg 800w"
            sizes="(max-width: 600px) 480px, 800px"
            alt="spaghetti">
          <img src="./images/4-large.jpg"
            srcset="./images/4-small.jpg 480w, ./images/4-large.jpg 800w"
            sizes="(max-width: 600px) 480px, 800px"
            alt="hamburger">
          <img src="./images/5-large.jpg"
            srcset="./images/5-small.jpg 480w, ./images/5-large.jpg 800w"
            sizes="(max-width: 600px) 480px, 800px"
            alt="sushi">
          <img src="./images/6-large.jpg"
            srcset="./images/6-small.jpg 480w, ./images/6-large.jpg 800w"
            sizes="(max-width: 600px) 480px, 800px"
            alt="pizza">
        </div>
      </div>
    `;
  }
}

customElements.define('food-gallery', FoodGallery);
