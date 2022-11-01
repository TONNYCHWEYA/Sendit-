import React from "react";

const ReadOnlyRow = ({ order, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.recipient_name}</td>
      <td>{order.recipient_contact}</td>
      <td>{order.weight}</td>
      <td>{order.from}</td>
      <td>{order.destination}</td>
      <td>{order.total_cost}</td>
      <td>{order.order_status}</td>
      <td>{order.user_id}</td>

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