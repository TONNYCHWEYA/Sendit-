import axios from 'axios';


export const updateParcel = (id ,parcel) => axios.put(`http://localhost:3000/parcels/${id}`, parcel)
.then((parcel)=>{
  console.log(parcel)
})
.catch((error)=>{
  console.log(error)
})
 
export const deleteParcel = (id) => axios.delete(`http://localhost:3000/parcels/${id}`)
.then( console.log("deleted element :"+id)).catch((error)=>{
    console.log(error)
})

