export const schema = gql`
  type OrderItem {
    id: Int!
    itemId: Int!
    item: Item!
    orderId: Int!
    order: Order!
    quantity: Int!
  }

  type Query {
    orderItems: [OrderItem!]! @requireAuth
    orderItem(id: Int!): OrderItem @requireAuth
  }

  input CreateOrderInput {
    orderNumber: String!
    userId: Int!
    paymentMethod: String!
    status: String!
    orderItems: [CreateOrderItemInput!]!
  }

  input CreateOrderItemInput {
    itemId: Int!
    orderId: Int!
    quantity: Int!
  }

  input UpdateOrderItemInput {
    itemId: Int
    orderId: Int
    quantity: Int
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @requireAuth
    createOrderItem(input: CreateOrderItemInput!): OrderItem! @requireAuth
    updateOrderItem(id: Int!, input: UpdateOrderItemInput!): OrderItem!
      @requireAuth
    deleteOrderItem(id: Int!): OrderItem! @requireAuth
  }
`;
