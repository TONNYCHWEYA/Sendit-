import React, { useState ,useEffect} from "react";
import ParcelContainer from "./ParcelContainer";

function Admin (){

    const[parcels , setParcels] =  useState([]);

    useEffect (()=>{
        fetch("")
        .then((r)=>r.json())
        .then(setParcels);
    }, []);

    function handleUpdateParcel(updatedParcel){
        const updatedParcelArray = parcels.map((parcel)=>{
             return parcel.id === updatedParcel.id ? updatedParcel : parcel;
        });
        setParcels(updatedParcelArray);
    }


    return(
        <>
        <ParcelContainer
          onUpdateStatus={handleUpdateParcel}
        />
        </>
    )
}
export default Admin;