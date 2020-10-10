import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <hero-image></hero-image>
      <section class="content" id="maincontent">
        <div class="list-restaurant">
          <h1 class="title">Explore Restoran</h1>
          <loading-indicator></loading-indicator>
          <div class="card-list">
            ${createSkeletonRestaurantTemplate(20)}
          </div>
        </div>
        <food-gallery></food-gallery>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.card-list');
    const loading = document.querySelector('.loader');
    const gallery = document.querySelector('food-gallery');
    restaurantsContainer.innerHTML = '';
    gallery.style.display = 'none';

    try {
      const data = await RestaurantDbSource.listRestaurant();

      loading.style.display = 'none';
      gallery.style.display = 'block';

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
