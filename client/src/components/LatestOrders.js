import react from 'react';
import "../App.css"

const LatestOrders = () => {
    return(
        <div className="app-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Order Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Collecting date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tr>
                    <td>5</td>
                    <td>Marion</td>
                    <td>Eldoret</td>
                    <td>Mombasa</td>
                    <td>10/10/2022</td>
                    <td>delivered</td>
                </tr>
            </table>

        </div>
    )
}

export default LatestOrders;