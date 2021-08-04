import api from "./api";

const OrdersService = {
  index: () => api.get('/api/orders'),
  indexWaiter: (id) => api.get('/api/orders', { params: { user_id: id } }),
  deleteOrder: (id) => api.delete(`/api/orders/${id}`),
  create: () => api.post('/api/orders', { order: { table_number, customer_name } }),
}

export default OrdersService;