import { Link, routes } from "@redwoodjs/router";
import { useMutation } from "@redwoodjs/web";
import { toast } from "@redwoodjs/web/toast";

import { QUERY } from "src/components/Order/OrdersCell";
import { truncate } from "src/lib/formatters";

const DELETE_ORDER_MUTATION = gql`
  mutation DeleteOrderMutation($id: Int!) {
    deleteOrder(id: $id) {
      id
    }
  }
`;

const OrdersList = ({ orders }) => {
  const [deleteOrder] = useMutation(DELETE_ORDER_MUTATION, {
    onCompleted: () => {
      toast.success("Order deleted");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete order " + id + "?")) {
      deleteOrder({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Order number</th>
            <th>User id</th>
            <th>Payment method</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{truncate(order.id)}</td>
              <td>{truncate(order.orderNumber)}</td>
              <td>{truncate(order.userId)}</td>
              <td>{truncate(order.paymentMethod)}</td>
              <td>{truncate(order.status)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.order({ id: order.id })}
                    title={"Show order " + order.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editOrder({ id: order.id })}
                    title={"Edit order " + order.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={"Delete order " + order.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(order.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
