import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => {
  const hideSomeDescriptionText = (str, id, wordCount = 40) => `
    ${str.split(' ').splice(0, wordCount).join(' ')} ...
    <span class="goToDetail">
      <a href="/#/detail/${id}">More details</a>
    </span>`;

  return `<article class="post-item">
  <figure class="post-item__content">
    <img class="post-item__thumbnail"  src="${CONFIG.BASE_IMAGE_URL}/${
    resto.pictureId
  }" alt="${resto.name}" />
    <figcaption class="post-item__city">${resto.city}</figcaption>
  </figure>
  <div class="post-item__info">
    <h2 class="post-item__name">${resto.name}</h2>
    <p class="post-item__rating">${resto.rating}</p>
    <p class="post-item__description">${hideSomeDescriptionText(
      resto.description,
      resto.id
    )}</p>
  </div>
</article>
`;
};

// const createRestoDetailTemplate = (resto) => {
//   let categoriesElement = '';
//   let foodsElement = '';
//   let drinksElement = '';
//   let reviewsElement = '';

//   resto.categories.forEach((category) => {
//     categoriesElement += `<p class="category">${category.name}</p>`;
//   });

//   resto.menus.foods.forEach((food) => {
//     foodsElement += `
//       <li><i class="fa-solid fa-pizza-slice" style="color: #81b29a;"></i> ${food.name}</li>`;
//   });

//   resto.menus.drinks.forEach((drink) => {
//     drinksElement += `
//       <li><i class="fa-solid fa-mug-hot" style="color: #81b29a;"></i> ${drink.name}</li>`;
//   });

//   resto.customerReviews.forEach((review) => {
//     reviewsElement += `
//       <div class="reviewContainer">
//         <h3 class="customerName">${review.name}</h3>
//         <p class="review">${review.review}</p>
//         <p class="reviewDate">${review.date}</p>
//       </div>
//     `;
//   });

//   return `
//       <h2 class="resto__title">${resto.name}</h2>
//       <h3>${resto.city}</h3>
//       <div class="resto__data">
//         <div class="categories">${categoriesElement}</div>
//         <figure class="resto__image-container">
//           <img src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}" alt="${resto.name}">
//           <figcaption>Rating: <span>${resto.rating}</span></figcaption>
//         </figure>
//         <div class="resto__info">
//           <h4>Description</h4>
//           <p>${resto.description}</p>
//           <h4>Address</h4>
//           <p>${resto.address}</p>
//           <h4>Menu Lists</h4>
//           <div class="resto__menu-list">
//             <div class="menu foods-menu">
//               <h5>Foods</h5>
//               <ul>${foodsElement}</ul>
//             </div>
//             <div class="menu drinks-menu">
//               <h5>Drinks</h5>
//               <ul>${drinksElement}</ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <h2>Reviews</h2>
//       <div class="reviews">
//         ${reviewsElement}
//       </div>
// `;
// };

// const createLikeButtonTemplate = () => `
//   <button aria-label="like this resto" id="likeButton" class="like">
//     <i class="fa-regular fa-thumbs-up" aria-hidden="true"></i>
//     <i class="fa-solid fa-thumbs-up" aria-hidden=true></i> Add to Favorite
//   </button>
//   `;

// const createLikedButtonTemplate = () => `
//   <button aria-label="unlike this resto" id="likeButton" class="like">
//   <i class="fa-regular fa-trash-can" aria-hidden="true"></i>
//   <i class="fa-solid fa-trash-can" aria-hidden="true"></i> Delete from Favorite
//   </button>
//   `;

export {
  createRestoItemTemplate,
  //   createRestoDetailTemplate,
  //   createLikeButtonTemplate,
  //   createLikedButtonTemplate,
};
