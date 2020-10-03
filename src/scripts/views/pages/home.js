import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <hero-image></hero-image>
      <section class="content" id="maincontent">
        <div class="list-restaurant">
          <h1 class="title">Explore Restoran</h1>
          <loading-indicator></loading-indicator>
          <div class="card-list"></div>
        </div>
        <food-gallery></food-gallery>
      </section>

    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.card-list');
    const loading = document.querySelector('.loader');

    try {
      const data = await RestaurantDbSource.listRestaurant();

      loading.style.display = 'none';

      data.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      loading.style.display = 'none';
      console.log(error);
      restaurantsContainer.innerHTML = '<error-message></error-message>';
    }
  },
};

export default Home;
