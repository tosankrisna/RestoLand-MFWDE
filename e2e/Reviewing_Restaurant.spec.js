const assert = require('assert');

Feature('Reviewing Restaurants');

Before((I) => {
  I.amOnPage('/');
});

Scenario('Post review restaurant', async (I) => {
  const review = 'Melakukan review melalui End-to-End testing';

  I.seeElement('.card-restaurant-item');

  I.click(locate('.card-restaurant-link').first());

  I.seeElement('form');
  I.fillField('nama', 'Tosan Krisna');
  I.fillField('review', review);
  I.click('.btnSubmit');

  const lastComment = locate('.review-comment').last();
  const lastReviewComment = await I.grabTextFrom(lastComment);

  assert.strictEqual(review, lastReviewComment);
});