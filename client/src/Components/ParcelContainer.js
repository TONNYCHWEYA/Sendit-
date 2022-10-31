import React from 'react';
import ParcelCard from './ParcelCard';
 
function ParcelContainer({parcels, onUpdateStatus, onUpdateLocation,}){
    const parcelCards = parcels.map((parcel)=>(
        <ParcelCard
        key={parcel.id}
        parcel = {parcel}
        onUpdateLocation={onUpdateLocation}
        onUpdateStatus={onUpdateStatus}
        />
    ));

    return (
        <ul>{parcelCards}</ul>
    )
}
export default ParcelContainer