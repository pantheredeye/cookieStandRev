import Item from "src/components/Item/Item";

export const QUERY = gql`
  query FindItemById($id: Int!) {
    item: item(id: $id) {
      id
      name
      description
      price
      quantity
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Item not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ item }) => {
  return <Item item={item} />;
};
