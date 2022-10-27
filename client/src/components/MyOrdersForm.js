import React, { useState, Fragment } from "react";
import "../App.css";
import data from "../mock-data.json";
import EditableRow from "./EditOrderForm";
import ReadOnlyRow from "./ReadOrderForm";
import { Button,Table,Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const MyOrdersForm = () => {
  const [orders, setOrders] = useState(data);

  const [editFormData, setEditFormData] = useState({
    order_id: " ",
    customername: "",
    from: "",
    to: "",
    price: "",
    status: "",
  });

  const [editOrderId, setEditOrderId] = useState(null);

  

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedOrder = {
      order_id: editOrderId,
      customername: editFormData.customername,
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
      order_id: order.order_id,
      customername: order.customername,
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
      <Card style={{background: '#1A237E', color: 'white', margin:'20px'}}>
        <Card.Body>
          <Card.Title>
            <h3>My Orders</h3>
          </Card.Title>
        </Card.Body>
      </Card>
      <form onSubmit={handleEditFormSubmit}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
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
        </Table>
      </form>

      

   <Link to="/sendaparcel"> <Button>Send a Parcel</Button></Link>  
    </div>
  );
};

export default MyOrdersForm;
