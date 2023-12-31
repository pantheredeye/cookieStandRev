export const schema = gql`
  type Item {
    id: Int!
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    orderItems: [OrderItem]!
  }

  type Query {
    items: [Item!]! @requireAuth
    item(id: Int!): Item @requireAuth
  }

  input CreateItemInput {
    name: String!
    description: String!
    price: Float!
    quantity: Int!
  }

  input UpdateItemInput {
    name: String
    description: String
    price: Float
    quantity: Int
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item! @requireAuth
    updateItem(id: Int!, input: UpdateItemInput!): Item! @requireAuth
    deleteItem(id: Int!): Item! @requireAuth
  }
`;
