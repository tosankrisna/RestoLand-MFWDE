Feature('Reviewing Restaurants');

Before((I) => {
  I.amOnPage('/');
});

Scenario('Post review restaurant', async (I) => {
  const review = 'e2e testing';

  I.seeElement('.card-restaurant-item');

  I.click(locate('.card-restaurant-link').first());

  I.seeElement('form');
  I.fillField('nama', 'user');
  I.fillField('review', review);
  I.click('.btnSubmit');

  I.see(review, '.review-comment');
});