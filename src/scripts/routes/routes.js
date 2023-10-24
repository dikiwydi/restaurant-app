import RestaurantList from '../views/pages/restaurant-list.js';
import Detail from '../views/pages/detail.js';
import Favorite from '../views/pages/favorit.js';

const routes = {
  '/': RestaurantList, // root page
  '/home': RestaurantList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
