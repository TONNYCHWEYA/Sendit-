import React from "react";

const ReadOnlyRow = ({ order, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{order.order_id}</td>
      <td>{order.customername}</td>
      <td>{order.from}</td>
      <td>{order.to}</td>
      <td>{order.price}</td>
      <td>{order.status}</td>

      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, order)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(order.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
