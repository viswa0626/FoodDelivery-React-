import React, { Component } from "react";
// import "./App.css";

export class ABOUT extends Component {
  render() {
    const myStyle = {
      // backgroundImage:
      //"url('https://image.shutterstock.com/image-vector/furniture-logo-template-260nw-372220771.jpg')",
      height: "90vh",
      width: "225vh",
      marginLeft: 2,
      fontSize: "20px",
      // backgroundSize: 'cover',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#a9a9a9",
    };

    return (
      <div style={myStyle}>
        {/* <div  style={myStyle}> </div> */}
        <div style={{marginTop:"30px", marginLeft:"400px" }}>
          <img
            src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg"
            height="300"
            width="500"
           
          />
        </div>
        <h4 style={{ marginLeft: 700, margin: 60 }}>
          This is a food delivery platform that provides its food to the
          customers in convenient boxes. It makes the whole experience more
          hassle-free and easy. Founded in the year 2012, It has has its
          headquarters in Bangalore. They offer a variety of dishes including
          All-in-one meals, Desserts, Starter etc. Founded Year: 2012
          Headquarters: Bangalore, India.
        </h4>
      </div>
    );
  }
}
