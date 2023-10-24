import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorit = {
  async render() {
    return `
    <section class="content">
    <div class="restoran">
      <h1 class="restoran__label">DAFTAR RESTORAN FAVORIT</h1>
      <div class="posts"></div>
    </div>
  </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('.posts');

    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorit;
