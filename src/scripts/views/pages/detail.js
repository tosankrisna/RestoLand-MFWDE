import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FormReviewInitiator from '../../utils/form-review-initiator';

const Detail = {
  async render() {
    return `
      <div class="detail-page content">
        <h1 class="detail-title">Detail Restoran</h1>
        <loading-indicator></loading-indicator>
        <div class="detail-content"></div>
        <div class="detail-form">
          <h1>Tambahkan review</h1>
          <div id="formReviewContainer"></div>
        </div>
        <div id="likeButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('.detail-content');
    const detailForm = document.querySelector('.detail-form');
    const loading = document.querySelector('.loader');

    try {
      const data = await RestaurantDbSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);

      loading.style.display = 'none';
      window.scrollTo(0, 0);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: data.restaurant.id,
          name: data.restaurant.name,
          description: data.restaurant.description,
          pictureId: data.restaurant.pictureId,
          city: data.restaurant.city,
          rating: data.restaurant.rating,
        },
      });

      FormReviewInitiator.init({
        formReviewContainer: document.querySelector('#formReviewContainer'),
        id: data.restaurant.id,
      });
    } catch (error) {
      console.log(error);
      loading.style.display = 'none';
      restaurantContainer.innerHTML = '<error-message></error-message>';
      detailForm.style.display = 'none';
    }
  },
};

export default Detail;
