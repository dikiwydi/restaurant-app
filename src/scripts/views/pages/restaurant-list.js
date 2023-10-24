import RestoDbResource from '../../data/restodb-source.js';
import { createRestoItemTemplate } from '../templates/template-creator.js';

const RestaurantList = {
  async render() {
    return `
    <section class="content">
    </article>
    <div class="restoran">
      <h1 class="restoran__label">TEMUKAN RESTORAN TERBAIK</h1>
      <div class="posts"></div>
    </div>
  </section>`;
  },

  async afterRender() {
    const restaurants = await RestoDbResource.restolist();
    const restaurantsContainer = document.querySelector('.posts');
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default RestaurantList;
