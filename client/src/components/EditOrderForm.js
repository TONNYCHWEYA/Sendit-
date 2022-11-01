import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr >
      <td>
        <input
          type="integer"
          required="required"
          placeholder="Enter ID..."
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="string"
          required="required"
          placeholder="Enter recipient name..."
          name="recipient_name"
          value={editFormData.recipient_name}
          onChange={handleEditFormChange}
        ></input>
      </td><td>
        <input
          type="string"
          required="required"
          placeholder="Enter recipient contact..."
          name="recipient_contact"
          value={editFormData.recipient_contact}
          onChange={handleEditFormChange}
        ></input>
      </td><td>
        <input
          type="integer"
          required="required"
          placeholder="Enter weight..."
          name="weight"
          value={editFormData.weight}
          onChange={handleEditFormChange}
        ></input>
      </td><td>
        <input
          type="string"
          required="required"
          placeholder="Enter from..."
          name="from"
          value={editFormData.from}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="string"
          required="required"
          placeholder="Enter destination..."
          name="destination"
          value={editFormData.destination}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="integer"
          required="required"
          placeholder="Enter total cost..."
          name="total_cost"
          value={editFormData.total_cost}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="string"
          required="required"
          placeholder="Enter order status ..."
          name="order_status"
          value={editFormData.order_status}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="integer"
          required="required"
          placeholder="Enter user id..."
          name="user_id"
          value={editFormData.user_id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
      );
};

export default EditableRow;