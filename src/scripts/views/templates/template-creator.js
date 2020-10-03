import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail-container">
    <div class="detail-img">
      <img src=${API_ENDPOINT.IMG_RESTAURANT}/${restaurant.pictureId} alt=${restaurant.name} crossorigin="anonymous" />
    </div>
    <div class="detail-content">
      <div class="detail-restaurant">
        <h2 class="title-restaurant">${restaurant.name}</h2>
        <div class="rating">
          <i class="fas fa-star"></i>
          <p>${restaurant.rating}</p>
        </div>
        <p class="description-restaurant">${restaurant.description}</p>
        <p class="location-restaurant"><i class="fas fa-map-marker-alt"></i>${restaurant.address}, ${restaurant.city}</p>
      </div>
      <div class="detail-menu">
        <h3 class="detail-menu-title">Kategori</h3>
        ${restaurant.categories.map((categori) => `
          <span class="category-name">${categori.name}</span>
        `).join('')}

        <h3 class="detail-menu-title">Daftar makanan</h3>
        ${restaurant.menus.foods.map((food) => `
          <span class="food-name">${food.name}</span>
        `)}

        <h3 class="detail-menu-title">Daftar minuman</h3>
        ${restaurant.menus.drinks.map((drink) => `
          <span class="drink-name">${drink.name}</span>
        `)}
      </div>
    </div>
    <div class="reviews">
      <h1 class="review-title">Review restoran</h1>
      <div class="review-container">
        ${restaurant.consumerReviews.map((review) => `
          <div class="review-card">
            <i class="far fa-user fa-2x"></i>
            <h3 class="review-name">${review.name}</h3>
            <p class="review-date">${review.date}</p>
            <p class="review-comment">"${review.review}"</p>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="card">
    <a href="/#/detail/${restaurant.id}">
      <figure class="card-image">
        <img src=${API_ENDPOINT.IMG_RESTAURANT}/${restaurant.pictureId} alt=${restaurant.name} crossorigin="anonymous" />
      </figure>
      <div class="card-content">
        <div class="rating">
          <i class="fas fa-star"></i>
          <p>${restaurant.rating}</p>
        </div>
        <h1 class="card-title">${restaurant.name}</h1>
        <p class="card-city">${restaurant.city}</p>
        <p class="card-description">${restaurant.description}</p>
      </div>
    </a>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFormReviewTemplate = () => `
  <form>
    <label for="nama">Nama</label>
    <input type="text" name="nama" class="inputName" placeholder="Masukan nama">
    <label for="review">Review</label>
    <textarea name="review" class="inputReview" placeholder="Masukan review"></textarea>
    <button type="submit" class="btnSubmit">Kirim</button>
  </form>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createFormReviewTemplate,
};
