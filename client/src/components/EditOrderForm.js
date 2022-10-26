import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a ordername..."
          name="ordername"
          value={editFormData.ordername}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter from..."
          name="address"
          value={editFormData.from}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter to ..."
          name="to"
          value={editFormData.to}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter price..."
          name="price"
          value={editFormData.price}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <input
          type="text"
          required="required"
          placeholder="Enter the status..."
          name="status"
          value={editFormData.status}
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
