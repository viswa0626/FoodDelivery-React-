import React, { Component } from "react";
// import "./App.css";

export class FAQs extends Component {
  render() {
    return (

      <div   style={{ backgroundColor: "#EE8740"}}>

      
      <div style={{ marginLeft: 40 }}>

        <div style={{marginLeft:"20px"}}>
        <h1 class="faq-heading">FAQ'S</h1>
        </div>
       

        <div class="faq-one">
          <h1 class="faq-page" style={{ textAlign: "left", fontSize: "21px" }}>
            I'm trying to complete the order placement in your website and end
            up with an error. How can this be solved for?
          </h1>

          <div class="faq-body" style={{ textAlign: "left", fontSize: "17px" }}>
            <p>
              The error you are facing could likely be because of stock
              availability on pin code not being serviceable. Please call us at
              1800 419 4532 for more help.
            </p>
          </div>
        </div>
        <div class="faq-two">
          <h1 class="faq-page" style={{ textAlign: "left", fontSize: "21px" }}>
            When can I expect the refund for my online order that was cancelled?
          </h1>

          <div class="faq-body" style={{ textAlign: "left", fontSize: "17px" }}>
            <p>
              The refund timeline for an Online order is 7-14 business days from
              the date of refund issued.
            </p>
          </div>
        </div>
        <div class="faq-three">
          <h1 class="faq-page" style={{ textAlign: "left", fontSize: "21px" }}>
            Can I cancel the order once placed, is the refund immediate?
          </h1>

          <div class="faq-body" style={{ textAlign: "left", fontSize: "17px" }}>
            <p>
              One can cancel the order via the link received on the order
              confirmation. Alternatively, you can connect with us on the
              Toll-free number 1800 419 4532 for further assistance.
            </p>
          </div>
        </div>
        <div class="faq-four">
          <h1 class="faq-page" style={{ textAlign: "left", fontSize: "21px" }}>
            Can I return the items I bought online at one of the stores?
          </h1>

          <div class="faq-body" style={{ textAlign: "left", fontSize: "17px" }}>
            <p>
              Yes, the articles bought online or through click and collect can
              be returned even at the stores. We suggest you carry the invoice
              along as it helps the processing easier. The return is possible if
              the place of delivery/pickup is in the same city where the store
              is located.
            </p>
          </div>
        </div>
        <div class="faq-five">
          <h1 class="faq-page" style={{ textAlign: "left", fontSize: "21px" }}>
            When can I expect the refund for my online order that was cancelled?
          </h1>

          <div class="faq-body" style={{ textAlign: "left", fontSize: "17px" }}>
            <p>
              The refund timeline for an Online order is 7-14 business days from
              the date of refund issued.
            </p>
          </div>
        </div>
        <div class="faq-six">
          <h1 class="faq-page" style={{ textAlign: "left", fontSize: "21px" }}>
            I'm unable to collect the delivery due to a change, how can I
            postpone it?
          </h1>

          <div class="faq-body" style={{ textAlign: "left", fontSize: "17px" }}>
            <p>
              Call us at 1800 419 4532 and the delivery can be postponed
              (rescheduled) as per the available slot.
            </p>
          </div>
        </div>
        <div class="faq-seven">
          <h1 class="faq-page" style={{ textAlign: "left", fontSize: "21px" }}>
            I would like to expedite the delivery, is it feasible?
          </h1>

          <div class="faq-body" style={{ textAlign: "left", fontSize: "17px" }}>
            <p>
              Customers cannot prepone the delivery from the date of delivery.
              However, they can extend the date of delivery on availability of
              slots.
            </p>
          </div>
        </div>
      </div>

      </div>
    );
  }
}
