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
            <p class="review-comment">${review.review}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
      <article class="card card-restaurant-item">
        <figure class="card-image">
          <img src="./placeholder.png" alt="skeleton" crossorigin="anonymous" />
        </figure>
        <div class="card-content">
          <div class="rating">
            <i class="fas fa-star"></i>
            <p>5</p>
          </div>
          <h1 class="card-title">
            <a class="card-restaurant-link">
              Lorem ipsum dolor sit.
            </a>
          </h1>
          <p class="card-city">Lorem ipsum dolor sit.</p>
          <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
        </div>
      </article>
    `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
  <article class="card card-restaurant-item">
    <figure class="card-image">
      <img data-src=${API_ENDPOINT.IMG_RESTAURANT}/${restaurant.pictureId} class="lazyload" alt=${restaurant.name} crossorigin="anonymous" />
    </figure>
    <div class="card-content">
      <div class="rating">
        <i class="fas fa-star"></i>
        <p>${restaurant.rating}</p>
      </div>
      <h1 class="card-title">
        <a href="/#/detail/${restaurant.id}" class="card-restaurant-link">
          ${restaurant.name}
        </a>
      </h1>
      <p class="card-city">${restaurant.city}</p>
      <p class="card-description">${restaurant.description}</p>
    </div>
  </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
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
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createFormReviewTemplate,
  createSkeletonRestaurantTemplate
};
