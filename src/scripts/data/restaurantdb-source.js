import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }

  static async reviewRestaurant(review) {
    const response = await fetch(API_ENDPOINT.REVIEW_RESTAURANT, {
      method: 'POST',
      headers: {
        'X-Auth-Token': CONFIG.API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });

    return response.json();
  }
}

export default RestaurantDbSource;
