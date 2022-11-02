import {React, Fragment} from "react";
import updateParcel from './MyOrdersForm'

const ReadOnlyRow = ({  handleEditClick, handleDeleteClick, parcel, updateParcel }) => {
  return (
    <Fragment>
      <tr key={parcel.id}>
        <td>{parcel.id}</td>
        <td>{parcel.recipient_name}</td>
        <td>{parcel.recipient_contact}</td>
        <td>{parcel.weight}</td>
        <td>{parcel.from}</td>
        <td>{parcel.destination}</td>
        <td>{parcel.total_cost}</td>
        <td>{parcel.order_status}</td>
        <td>{parcel.user_id}</td>
        <td>
          <button
            type="button"
            onClick={(event) => handleEditClick(event, parcel)}>
            Edit
          </button>
          <button type="button" onClick={() => handleDeleteClick(parcel.id)}>
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default ReadOnlyRow;