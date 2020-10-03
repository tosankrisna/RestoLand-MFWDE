import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail-container">
    <div class="detail-img">
      <img src=${API_ENDPOINT.IMG_RESTAURANT}/${restaurant.pictureId} alt=${restaurant.name} crossorigin="anonymous" />
    </div>
    <div class="detail-content">
      <div class="detail-restaurant">
        <h1 class="title-restaurant">${restaurant.name}</h1>
        <div class="rating">
          <i class="fas fa-star"></i>
          <p>${restaurant.rating}</p>
        </div>
        <p class="description-restaurant">${restaurant.description}</p>
        <p class="location-restaurant"><i class="fas fa-map-marker-alt"></i>${restaurant.address}, ${restaurant.city}</p>
      </div>
      <div class="detail-menu">
        <p class="detail-menu-title">Kategori</p>
        ${restaurant.categories.map((categori) => `
          <span class="category-name">${categori.name}</span>
        `).join('')}

        <p class="detail-menu-title">Daftar makanan</p>
        ${restaurant.menus.foods.map((food) => `
          <span class="food-name">${food.name}</span>
        `)}

        <p class="detail-menu-title">Daftar minuman</p>
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
            <p class="review-name">${review.name}</p>
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
    <label for="inputName">Nama</label>
    <input type="text" name="nama" class="inputName" id="inputName" placeholder="Masukan nama">
    <label for="inputReview">Review</label>
    <textarea name="review" class="inputReview" id="inputReview" placeholder="Masukan review"></textarea>
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
