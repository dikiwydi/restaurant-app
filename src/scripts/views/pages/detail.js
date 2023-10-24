import UrlParser from '../../routes/url-parser';
import RestoDbResource from '../../data/restodb-source.js';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <section class="content">
    <div class="restoran">
      <h1 class="restoran__label">DETAIL RESTORAN</h1>
      <div class="posts"></div>
      <div id="likeButtonContainer"></div>
    </div>
  </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;
    const resto = await RestoDbResource.detailResto(id);
    const restoContainer = document.querySelector('.posts');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        rating: resto.rating,
        city: resto.city,
        description: resto.description,
      },
    });
  },
};

export default Detail;
