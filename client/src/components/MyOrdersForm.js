import React, { useState, Fragment, useEffect } from "react";
import "../App.css";
//import data from "../mock-data.json";
import EditableRow from "./EditOrderForm";
import ReadOnlyRow from "./ReadOrderForm";
import { Button,Table,Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {updateParcel} from "./client"
import { deleteParcel } from "./client";

const MyOrdersForm = () => {
  const [parcels, setParcels] = useState([]);


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
       .then((parcels) => {
          
          setParcels(parcels);
          console.log(parcels);
       })
       .catch((err) => {
          console.log(err.message);
       });
    }, []);

    const [editParcelId, setEditParcelId] = useState(null);


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

    const editedParcel = {
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

    const newParcels = [...parcels];

    const index = parcels.findIndex((parcel) => parcel.id === editParcelId);

    newParcels[index] = editedParcel;

    setParcels(newParcels);
    setEditParcelId(null);
  };

  const handleEditClick = (event, parcel) => {
    event.preventDefault();
    setEditParcelId(parcel.id);

    const formValues = {
      id: parcel.id,
      recipient_name: parcel.recipient_name,
      recipient_contact: parcel.recipient_contact,
      weight: parcel.weight,
      from: parcel.from,
      destination: parcel.destination,
      total_cost: parcel.total_cost,
      order_status: parcel.order_status,
      user_id: parcel.user_id
    };

    setEditFormData(formValues);
    
    const updateElement ={
      recipient_name: parcel.recipient_name,
      recipient_contact: parcel.recipient_contact,
      weight: parcel.weight,
      from: parcel.from,
      destination: parcel.destination,
      total_cost: parcel.total_cost,
      order_status: parcel.order_status,
      user_id: parcel.user_id
    }
    updateParcel(parcel.id,updateElement);

    // useEffect(() => {
    //   axios.put(`http://localhost:3000/parcels/'${parcel.id}`, parcels)
    //   .then((parcels)=>{
    //     console.log(parcels)
    //   })
    //   .catch((error)=>{
    //     console.log(error)
    //   })
    // });



  // {  function UpdateParcel({ onUpdateParcel }) {
  //     const [parcel, setparcel] = useState("0");

  //     function handleSubmit(e) {
  //         e.preventDefault();
  //         fetch(`http://localhost:3000/parcels${parcel.id}`, {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             order_status: order_status
          
  //           }),
  //         })
  //           .then((r) => r.json())
  //           .then((updatedParcel) => onUpdateParcel(updatedParcel));
  //       }
  //   };
}
  const handleCancelClick = () => {
    setEditParcelId(null);
  };

  const handleDeleteClick = (parcelId) => {
    const newParcels = [...parcels];

    const index = parcels.findIndex((parcel) => parcel.id === parcelId);

    newParcels.splice(index, 1);

    setParcels(newParcels);
    deleteParcel(parcelId)
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
            {parcels.map((parcel) => (
              <Fragment>
                {editParcelId === parcel.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                  parcel={parcel}
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