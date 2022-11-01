import {useState, useEffect} from 'react';
import "../App.css"
import {Table, Card } from 'react-bootstrap'

//template for making the get request
const LatestOrders = () => {
    const [orders, setOrders] = useState([]);
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
    return(
        <div className="app-container">
            
            <Card style={{background: '#1A237E', color: 'white', margin:'20px'}}>
                <Card.Body>
                <Card.Title>
                    <h3>Latest Orders</h3>
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
                        {orders.map((order)=> 
                            
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.recipient_name}</td>
                            <td>{order.recipient_contact}</td>
                            <td>{order.weight}</td>
                            <td>{order.from}</td>
                            <td>{order.destination}</td>
                            <td>{order.total_cost}</td>
                            <td>{order.order_status}</td>
                            <td>{order.user_id}</td>
                        </tr>
                            
                            )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default LatestOrders;