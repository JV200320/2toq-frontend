import api from "./api";

const OrdersService = {
  deleteOrder: (id) => api.delete(`/api/orders/${id}`),
  create: (params) => api.post('/api/orders', params),
}

export default OrdersService;