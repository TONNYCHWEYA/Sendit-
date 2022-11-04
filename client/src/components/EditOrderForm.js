import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleSave
}) => {
  return (
    <tr>
      <td>{editFormData.id}</td>
      <td>{editFormData.recipient_name}</td>
      <td>{editFormData.recipient_contact}</td>
      <td>{editFormData.weight}</td>
      <td>{editFormData.from}</td>
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
      <td>{editFormData.total_cost}</td>
      <td>{editFormData.order_status}</td>
      <td>{editFormData.user_id}</td>

      <td>
        <button type="submit" onClick={handleSave}>Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;