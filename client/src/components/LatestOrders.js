import {useState} from 'react';
import "../App.css"
import {Table } from 'react-bootstrap'
import data from '../mock-data.json'

const LatestOrders = () => {
    const [orders] = useState(data);
    return(
        <div className="app-container">
            <h3>Latest Orders</h3>
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

        </div>
    )
}

export default LatestOrders;