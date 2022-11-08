

import axios from "axios";
import fetch from "unfetch";

let token = localStorage.getItem("token");

export const updateParcel = (id, parcel) =>
  axios
    .put(`http://localhost:3000/parcels/${id}`, {headers: { Authorization: `Bearer ${token}`,
      body: {
        recipient_name: parcel.recipient_name,
        recipient_contact: parcel.recipient_contact,
        weight: parcel.weight,
        from: parcel.from,
        destination: parcel.destination,
        distance: 45,
        order_status: parcel.order_status,
        user_id: parcel.user_id,
      },
    }})
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

export const deleteParcel = (id) =>
  axios
    .delete(`http://localhost:3000/parcels/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(console.log("deleted element :" + id))
    .catch((error) => {
      console.log(error);
    });

export const update = (id, parcel) =>
  fetch(`http://localhost:3000/parcels/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(parcel),
    // recipient_name: parcel.recipient_name,
    // recipient_contact: parcel.recipient_contact,
    // weight: parcel.weight,
    // from: parcel.from,
    // destination: parcel.destination,
    // distance: null,
    // order_status: parcel.order_status,
    // user_id: parcel.user_id
  }).then((r) => {
    return console.log(r.json());
  });
