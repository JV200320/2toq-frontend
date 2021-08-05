import api from "./api";

const OrdersService = {
  index: (url) => {
    return api.get(url).then(response => response.data)
  },
  deleteOrder: (id) => api.delete(`/api/orders/${id}`),
  create: (params) => api.post('/api/orders', params),
}

export default OrdersService;