import api from './api';

const CategoriesService = {
  index: () => api.get('/api/categories'),
}

export default CategoriesService;
