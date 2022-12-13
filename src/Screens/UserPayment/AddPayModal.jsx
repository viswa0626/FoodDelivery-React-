import React from 'react';
import axios from 'axios';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';
    
export class AddPayModal extends React.Component {
  constructor() {

    super();
    this.state = {
      name: '',
      cardNo: '',
      expiryDate: '',
      cvvNo: '',
      address: '',
      paymentMode: ''
            
    }

    this.name = this.name.bind(this);
    this.cardNo = this.cardNo.bind(this);
    this.expiryDate = this.expiryDate.bind(this);
    this.cvvNo = this.cvvNo.bind(this);
    this.address = this.address.bind(this);
    this.paymentMode = this.paymentMode.bind(this);
    this.register = this.register.bind(this);
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
 
  register(event) {
    let x = parseInt(this.state.cvvNo);

   let body = {
            name : this.state.name,
            cardNo: this.state.cardNo,
            expiryDate: this.state.expiryDate,
            cvvNo: x,
            address: this.state.address,
            paymentMode: this.state.paymentMode
          }

  let ApiCall = axios.post('https://localhost:44364/api/Payment', body)
  .then(response => {
    console.log(response);
    if (response.status === 201)
    {     
            alert('Successfully Added')
            //this.props.history.push("/Payment");
    }
  }).catch(function(error){
    console.log(error)
    alert('failed')
  })
}


 
  render() {
    const myStyle={
      backgroundImage:
      "url('https://picsum.photos/id/270/1920/1080.jpg?blur=2')",
      height: '77vh',
      width: '208vh',
      marginLeft:2,
      fontSize:'20px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
  };
    return (

      <div className="app flex-row align-items-center"  style={myStyle}>

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

                      <Input type="text" id='name'

                      onChange={this.name} placeholder="Enter User Name" required="required"/>

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="text" required="required"

                      onChange={this.cardNo} placeholder="Enter Card No"  />

                    </InputGroup>
                    <InputGroup className="mb-3">

                      <Input type="text" required="required"

                      onChange={this.expiryDate} placeholder="Enter Expiry Date" />

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="password" required="required"

                      onChange={this.cvvNo} placeholder="Enter CVV No" />

                    </InputGroup>

                    <InputGroup className="mb-4">

                      <Input type="text" required="required"

                      onChange={this.address} placeholder="Enter Address" />

                    </InputGroup>

                    <InputGroup className="mb-4">

                      <Input type="text" required="required"

                      onChange={this.paymentMode} placeholder="Enter Payment Mode" />

                    </InputGroup>

                    <Button  onClick={this.register}  

                   style={{backgroundColor:'  #008B8B'}} block>Pay</Button>

                  </Form>

                </CardBody>

              </Card>

            </Col>

          </Row>

        </Container>

        <a href='./Cart'>Back</a>

      </div>

    );

  }

}

export default AddPayModal;