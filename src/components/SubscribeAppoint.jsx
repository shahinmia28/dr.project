import React from "react";
import styled from "styled-components";
import SubscribeForm from "./form/SubscribeForm";

const SubscribeAppoint = () => {
  return (
    <Wrapper className="book-appointment">
      <div className="container">
        <div className="subscribe">
          <div className="s-title">
            <h4>WE ARE HERE FOR YOU</h4>
            <h2>Book Appointment</h2>
          </div>
          <SubscribeForm />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-image: url("/images/service-subscribe.jpg");
  background-position: top right;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 90px 150px;
  .subscribe {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .s-title {
      width: 35%;
      h4 {
        padding-top: 0px;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
      }
      h2 {
        padding-bottom: 0px;
        font-size: 30px;
        font-weight: 700;
        color: #6ec1e4;
      }
    }
    .form {
      width: 65%;
      padding-bottom: 0px;
    }
  }
  @media (max-width: 992px) {
    padding: 50px 0;
    .subscribe {
      flex-direction: column;
      .s-title {
        width: 90%;
      }
      .form {
        width: 90%;
      }
    }
  }
`;
export default SubscribeAppoint;
