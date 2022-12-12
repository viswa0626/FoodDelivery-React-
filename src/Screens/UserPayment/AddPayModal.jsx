import React, { Component } from 'react';

import axios from 'axios';


import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

  export class AddPayModal extends React.Component {
  constructor() {

    
    super();
    this.state = {
        pays: [],
      paymentId: null,
      name: '',
      cardNo: '',
      expiryDate: '',
      cvvNo: '',
      address: '',
      paymentMode: ''
    }

    this.paymentId = null;
    this.name = this.name.bind(this);
    this.cardNo = this.cardNo.bind(this);
    this.expiryDate = this.expiryDate.bind(this);
    this.cvvNo = this.cvvNo.bind(this);
    this.address = this.address.bind(this);
    this.paymentMode = this.paymentMode.bind(this);
  }

  name(event) {
    this.setState({ name: event.target.value })
  }

  cardNo(event) {
    this.setState({ cardNo: event.target.value })
  }
 
  expiryDate(event) {
    this.setState({ expiryDate: event.target.value })
  }
 
  cvvNo(event) {
    this.setState({ cvvNo: event.target.value })
  }
  address(event) {
    this.setState({ address: event.target.value })
  }
  paymentMode(event) {
    this.setState({ paymentMode: event.target.value })
  }

//   this.state = {
//     pays: [],
//     addModalShow: false,
//     editModalShow: false,
//     testModalShow: false
// };


async refreshList() {
    const value = await axios.post('https://localhost:44364/api/Payment');
    //console.log(value);
    this.setState({ pays: value.data }, () =>
        console.log(this.state.pays));
}

componentDidMount() {
    this.refreshList();
}
 
  render() {
    const myStyle={
      backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83_9wSml9cgYC5tvXuhgX1bS60VeCw97CIQ&usqp=CAU')",
      height: '75vh',
      width: '220vh',
      marginLeft:2,
      fontSize:'20px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
  };
    return (

      <div className="app flex-row align-items-center"  style={myStyle}>

        <div style={{backgroundColor: "grey", width: "190px", height: "200px", alignItems: "center", marginLeft: "600px"}}>
        <Container>

          <Row className="justify-content-center">

            <Col md="9" lg="7" xl="6">

              <Card className="mx-4">

                <CardBody className="p-4">

                  <Form onSubmit={this.handleSubmit}>

                    <div class="row" className="mb-2 pageheading">

                      <div class="col-sm-12 btn btn-primary bg-dark">

                        Enter Details

                        </div>

                    </div>

                    <InputGroup className="mb-3">

                      <Input type="text"  required id='name'

                      onChange={this.name} placeholder="Enter Name" />

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="text"  required

                      onChange={this.cardNo} placeholder="Enter Card No"  bssize="50px"/>

                    </InputGroup>
                    <InputGroup className="mb-3">

                      <Input type="text"  required

                      onChange={this.expiryDate} placeholder="Enter Expiry Date" />

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="cvvNo"  required

                      onChange={this.Password} placeholder="Enter CVV" />

                    </InputGroup>

                    <InputGroup className="mb-4">

                      <Input type="text"  required

                      onChange={this.address} placeholder="Enter Address" />

                    </InputGroup>

                    <InputGroup className="mb-4">

                      <Input type="text"  required

                      onChange={this.paymentMode} placeholder="Enter Payment Mode" />

                    </InputGroup>

                    <Button  onClick={this.refreshList}  

                   style={{backgroundColor:'#008B8B'}} block>Pay</Button>

                  </Form>

                </CardBody>

              </Card>

            </Col>

          </Row>

        </Container>

        <div style={{backgroundColor: "white", width: "50px", marginLeft: "70px", marginTop: "5px"}}>
        <a href='./Cart'>Back</a>
        </div>

        </div>

      </div>

     

    );

  }

}