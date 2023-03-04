import React from "react";
import styled from "styled-components";
import ConsultForm from "../components/form/ConsultForm";

const Consultation = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="consultation">
          <div className="none d-none d-lg-block"></div>
          <div className="form-container">
            <div className="form">
              <div className="title">
                <h2>Free Consultation</h2>
                <p>
                  Should you need help with your health issues, seek for a home
                  caregiver for your loved one, don’t hesitate to contact us.
                </p>
              </div>
              <ConsultForm />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-image: url("/images/consultation_1.jpg");
  background-position: left center;
  background-size: cover;
  background-repeat: no-repeat;
  .consultation {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0;
    flex-wrap: 0.5;
    .none {
      flex: 50%;
    }
    .form-container {
      padding: 20px;
      flex: 50%;
      .form {
        width: 80%;
        background: #d0df56;
        margin: auto;
        padding: 50px;
        .title {
          align-items: flex-start;
          text-align: left;
          margin-bottom: 10px;
          h2 {
            font-size: 30px;
            padding-top: 0px;
            &::before {
              display: none;
            }
          }
          p {
            font-size: 17px;
            color: #000000;
          }
        }
      }
    }
  }
`;
export default Consultation;
