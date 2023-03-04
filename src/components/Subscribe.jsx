import React from "react";
import styled from "styled-components";
import SubscribeForm from "./form/SubscribeForm";
import Testimonial from "./Testimonial";

const Subscribe = () => {
  return (
    <Wrapper className="row">
      <div className="col-12 col-md-6 p-0">
        <div className="testimonial">
          <Testimonial />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="container">
          <div className="subscribe">
            <div className="s-title">
              <h4>WE ARE HERE FOR YOU</h4>
              <h2>Book Appointment</h2>
            </div>
            <SubscribeForm />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  margin: 0;
  padding: 0;
  background-image: url("./images/seventh.jpg");
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;
  .testimonial {
    background: #062a4d;
    width: 100%;
    height: 100%;
  }
  .subscribe {
    padding: 50px;
    .s-title {
      h4 {
        padding-top: 50px;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
      }
      h2 {
        padding-bottom: 20px;
        font-size: 30px;
        font-weight: 700;
        color: #6ec1e4;
      }
    }
  }
`;

export default Subscribe;
