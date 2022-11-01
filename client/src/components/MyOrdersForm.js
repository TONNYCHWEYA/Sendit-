import React, { useState, Fragment, useEffect } from "react";
import "../App.css";
//import data from "../mock-data.json";
import EditableRow from "./EditOrderForm";
import ReadOnlyRow from "./ReadOrderForm";
import { Button,Table,Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const MyOrdersForm = () => {
  const [orders, setOrders] = useState([]);


  const [editFormData, setEditFormData] = useState({
    id: " ",
    recipient_name: "",
    recipient_contact: "",
    weight: "",
    from: "",
    destination: "",
    total_cost: "",
    order_status: "",
    user_id: "",
  });

  useEffect(() => {
    fetch('http://localhost:3000/parcels')
       .then((response) => response.json())
       .then((orders) => {
          
          setOrders(orders);
          console.log(orders);
       })
       .catch((err) => {
          console.log(err.message);
       });
    }, []);

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
      id: editFormData.id,
      recipient_name: editFormData.recipient_name,
      recipient_contact: editFormData.recipient_contact,
      weight: editFormData.weight,
      from: editFormData.from,
      destination: editFormData.destination,
      total_cost: editFormData.total_cost,
      order_status: editFormData.order_status,
      user_id: editFormData.user_id,
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
      id: order.id,
      recipient_name: order.recipient_name,
      recipient_contact: order.recipient_contact,
      weight: order.weight,
      from: order.from,
      destination: order.destination,
      total_cost: order.total_cost,
      order_status: order.order_status,
      user_id: order.user_id
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
              <th> ID</th>
              <th>Recipient Name</th>
              <th>Recipient Contact</th>
              <th>Weight</th>
              <th>From</th>
              <th>Destination</th>
              <th>Total Cost</th>
              <th>Order Status</th>
              <th>User ID</th>
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