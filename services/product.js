import api from './api';

const ProductsService = {
  index: () => api.get('/api/products'),
}

export default ProductsService;
