const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('/#/favorite');
});

const messageText = 'Data restaurant favorit tidak ditemukan';

Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('.card-list');
  I.see(messageText, 'favorite-message');
});

Scenario('like and unlike one restaurant', async (I) => {
  // Like restoran
  I.see(messageText, 'favorite-message');

  I.amOnPage('/');

  I.seeElement('.card-restaurant-item');

  const firstRestaurant = locate('.card-restaurant-link').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-restaurant-item');

  const likeRestaurantTitle = await I.grabTextFrom('h1.card-title');
  assert.strictEqual(firstRestaurantTitle, likeRestaurantTitle);

  // Unlike restoran
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('favorite-message');

  const favPageMessage = await I.grabTextFrom('p.fav-page-msg');
  assert.strictEqual(favPageMessage, messageText);
});