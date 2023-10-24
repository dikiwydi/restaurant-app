import CONFIG from './config';

const baseUrl = CONFIG.BASE_URL;

const API_ENDPOINT = {
  LIST: `${baseUrl}/list`,
  DETAIL: (id) => `${baseUrl}/detail/${id}`,
  REVIEW: `${baseUrl}/review`,
};

export default API_ENDPOINT;
