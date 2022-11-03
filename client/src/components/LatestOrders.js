import {useState, useEffect} from 'react';
import "../App.css"
import {Table, Card } from 'react-bootstrap'

const LatestParcels = () => {
    const [parcels, setParcels] = useState([]);
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
    return(
        <div className="app-container">
            
            <Card style={{background: '#1A237E', color: 'white', margin:'20px'}}>
                <Card.Body>
                <Card.Title>
                    <h3>Latest Parcels</h3>
                </Card.Title>
                </Card.Body>
            </Card>
            <div className='latest-orders'>
                 
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Recipient Name </th>
                            <th>Recipient Contact</th>
                            <th>Weight</th>
                            <th>From</th>
                            <th>Destination</th>
                            <th>Total cost</th>
                            <th>Order status</th>
                            <th>User ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel)=> 
                            
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
                        </tr>
                            
                            )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default LatestParcels;