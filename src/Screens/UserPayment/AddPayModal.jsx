import React from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';
    
export class AddPayModal extends React.Component {
  constructor() {

    super();
    let paid = false
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
            this.setState({paid:true});
    }
  }).catch(function(error){
    console.log(error)
    alert('Invalid Details')
  })
}


 
  render() {
    const myStyle={
      backgroundImage:
      "url('https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&w=600')",
      height: '100vh',
      width: '100%',
      marginLeft:2,
      fontSize:'20px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
  };
  if(this.setState.paid){
    return <Navigate to="/Payment"/>
  }
    return (

      <div className="app flex-row align-items-center"  style={myStyle}>
           <div style={{ width: "190px", height: "200px", alignItems: "center", paddingTop:"300px",  marginTop:"10px", marginLeft: "715px"}}>
        <Container>

          <Row className="justify-content-center">

            <Col md="9" lg="7" xl="6">

              <Card className="mx-4">

                <CardBody className="p-4">

                  

                   

                      <div class="col-sm-12 btn btn-primary bg-dark" style={{color:"white", marginLeft:"20px"}}>

                       <h2> Enter Details </h2> 

                      </div>

                  <Form onSubmit={this.handleSubmit} style={{fontSize:"30px"}}>

                      <div class="row" className="mb-2 pageheading"> 

                      </div>

                    <InputGroup className="mb-3">

                      <Input type="text" id='name'

                      onChange={this.name} placeholder="Enter Name" required="required" style={{fontSize:"18px", marginTop:"20px"}}/>

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="Number" required="required" style={{fontSize:"18px", marginTop:"20px"}}

                      onChange={this.cardNo} placeholder="Enter Card No" bssize="50px" />

                    </InputGroup>
                    <InputGroup className="mb-3">

                      <Input type="Date"  style={{fontSize:"22px",blockSize:"35px", marginTop:"20px"}}

                      onChange={this.expiryDate} placeholder="Enter Expiry Date"  />

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="password" required="required" maxLength={3} style={{fontSize:"18px", marginTop:"20px"}}

                      onChange={this.cvvNo} placeholder="Enter CVV No" />

                    </InputGroup>

                    <InputGroup className="mb-4">

                      <Input type="text" required="required" style={{fontSize:"18px", marginTop:"20px"}}

                      onChange={this.address} placeholder="Enter Address" />

                    </InputGroup>

                    <InputGroup className="mb-4">

                      <Input type="text" required="required" style={{fontSize:"18px", marginTop:"20px"}}

                      onChange={this.paymentMode} placeholder="Enter Payment Mode" />

                    </InputGroup>

                    <Button  onClick={this.register}  

                   style={{backgroundColor:'	#008B8B' ,fontSize:"20px", marginLeft:"85px", marginTop:"20px", height:"40px", width:"60px"}} block>Pay</Button>

                  </Form>

                </CardBody>

              </Card>

            </Col>

          </Row>

        </Container>

        <div style={{backgroundColor: "white", width: "50px", marginLeft: "20px", marginTop: "170px"}}>

        {/* <a href='./UserCart'>Back</a> */}

        <a href='./userHome' style={{marginRight:'30px' ,fontSize:"20px", }}>Back</a>

        </div>

      </div>

      </div>

    );

  }

}

export default AddPayModal;