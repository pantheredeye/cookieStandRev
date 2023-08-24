import { Link, routes } from "@redwoodjs/router";

import Items from "src/components/Item/Items";

export const QUERY = gql`
  query FindItems {
    items {
      id
      name
      description
      price
      quantity
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No items yet. "}
      <Link to={routes.newItem()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ items }) => {
  return <Items items={items} />;
};
