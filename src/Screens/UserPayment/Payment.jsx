import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

export class Payment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pays: [],
            addModalShow: false,
            editModalShow: false,
            testModalShow: false
        };
    }

    async refreshList() {
        const value = await axios.get('https://localhost:44364/api/Payment');
        //console.log(value);
        this.setState({ pays: value.data }, () =>
            console.log(this.state.pays));
    }

    componentDidMount() {
        this.refreshList();
    }

    render() {

        const myStyle = {
            backgroundImage:
                "url('https://images.moneycontrol.com/static-mcnews/2022/06/Indian-Digital-Payments_pic.jpg?impolicy=website&width=770&height=431')",
            height: '100vh',
            width:"100%",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',

        };

        return (
            <div className="mb-2 pageheading" style={myStyle}>

                <Table className="mt-4" striped bordered hover size="sm" border="1px solid black" style={{ width: "100%" }}>
                    {/* <thead> */}
                    <tr>
                        <th>PaymentId</th>
                        <th>Name</th>
                        <th>CardNo</th>
                        <th>ExpiryDate</th>
                        <th>CvvNo</th>
                        <th>Address</th>
                        <th>PaymentMode</th>
                    </tr>
                    {/* </thead>
     <tbody> */}
                    {this.state.pays.map(pay =>
                        <tr key={pay.paymentId}>
                            <td>{pay.paymentId}</td>
                            <td>{pay.name}</td>
                            <td>{pay.cardNo}</td>
                            <td>{pay.expiryDate}</td>
                            <td>{pay.cvvNo}</td>
                            <td>{pay.address}</td>
                            <td>{pay.paymentMode}</td>
                        </tr>)}
                    {/* </tbody> */}

                </Table>

                <a href='./userHome' style={{marginRight:'30px' ,size:"40px", fontSize:"20px", marginLeft:"650px",color:"white"}}>Back</a>

            </div>
        )
    }
}