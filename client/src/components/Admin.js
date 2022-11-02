import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import data from "../mock-data.json";
import EditableRow from "./EditOrderForm";
import ReadOnlyRow from "./ReadOrderForm";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const MyOrdersForm = () => {
  const [orders, setOrders] = useState(data);
  const [addFormData, setAddFormData] = useState({
    ordername: "",
    from: "",
    to: "",
    price: "",
    status: "",
    contact :""
  });


  const [editOrderId, setEditOrderId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
 


  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newOrder = {
      id: nanoid(),
      ordername: addFormData.ordername,
      from: addFormData.from,
      to: addFormData.to,
      price: addFormData.price,
      status: addFormData.status,
    };

    const newOrders = [...orders, newOrder];
    setOrders(newOrders);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedOrder = {
      id: editOrderId,
      ordername: editFormData.ordername,
      from: editFormData.from,
      to: editFormData.to,
      price: editFormData.price,
      status: editFormData.status,
    };

    const newOrders = [...orders];

    const index = orders.findIndex((order) => order.id === editOrderId);

    newOrders[index] = editedOrder;

    setOrders(newOrders);
    setEditOrderId(null);
  };

  const handleEditClick = (event, order) => {
    event.preventDefault();
    setEditOrderId(order.id);

    const formValues = {
      ordername: order.ordername,
      from: order.from,
      to: order.to,
      price: order.price,
      status: order.status,

    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditOrderId(null);
  };

  const handleDeleteClick = (orderId) => {
    const newOrders = [...orders];

    const index = orders.findIndex((order) => order.id === orderId);

    newOrders.splice(index, 1);

    setOrders(newOrders);
  };

  return (
    
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Order Name</th>
              <th>From</th>
              <th>To</th>
              <th>Price</th>
              <th> Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <Fragment>
                {editOrderId === order.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    order={order}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="ordername"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="from"
          required="required"
          placeholder="Enter from..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="to"
          required="required"
          placeholder="Enter to..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="price"
          required="required"
          placeholder="Enter price..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="status"
          required="required"
          placeholder="Enter the status..."
          onChange={handleAddFormChange}
        />

        <button type="submit">Add</button>
      </form>

   <Link to="/sendaparcel"> <Button>Send a Parcel</Button></Link>  
    </div>
  );
};

//export default MyOrdersForm;
