const color: [number, number, number] = [233, 21, 1];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];

const responses: HTTPResponse[] = [
  [400, 'Not Found'],
  [200, 'OK'],
];

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelievered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelievered(OrderStatus.RETURNED);
