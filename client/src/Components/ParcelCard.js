import React,{useState} from "react";

function ParcelCard({parcel, onUpdateStatus, onUpdateLocation}){
    const {id, status: in_transit} = parcel;
    //const {location,setLocation} = useState('')

    function handleStatusClick(){
        const updateStatus = {status: !in_transit}
        fetch(`http://localhost:3000/parcels/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateStatus)
            })
            .then((r)=> r.json())
            .then((updatedStatus)=> onUpdateStatus(updatedStatus))
    }



    function onUpdateLocation(){
        const updateLocation = {location: parcel.location}
        fetch(`http://localhost:3000/parcels/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateLocation)
            })
            .then((r)=> r.json())
            .then((updatedLocation)=> onUpdateLocation(updatedLocation))
        
    }

    return (
            <li>
                {in_transit?(
                    <button onClick={handleStatusClick}>
                        In Transit
                    </button>
                ):(
                    <button onClick={handleStatusClick}>Delivered</button>
                )}
            </li>
        
    )
    

}
export default ParcelCard;