import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <div class="list-restaurant">
          <h1 class="title">Restoran Favorit</h1>
          <loading-indicator></loading-indicator>
          <div class="card-list"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.card-list');
    const loading = document.querySelector('.loader');

    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();

    if (restaurant.length === 0) {
      restaurantContainer.innerHTML = '<favorite-message></favorite-message>';
    }

    loading.style.display = 'none';

    restaurant.forEach((data) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(data);
    });
  },
};

export default Favorite;
