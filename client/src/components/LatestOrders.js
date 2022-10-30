import {useState, useEffect} from 'react';
import "../App.css"
import {Table, Card } from 'react-bootstrap'

//template for making the get request
const LatestOrders = () => {
    const [orders, setOrders] = useState([]);
        useEffect(() => {
        fetch('')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setOrders(data);
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
                {orders.map((order) => {
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Collecting date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order)=> (
                        <tr>
                            <td>{order.order_id}</td>
                            <td>{order.customername}</td>
                            <td>{order.from}</td>
                            <td>{order.to}</td>
                            <td>{order.collectingdate}</td>
                            <td>{order.status}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            })}
            </div>
        </div>
    )
}

export default LatestOrders;