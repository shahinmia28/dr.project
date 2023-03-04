import React from "react";
import styled from "styled-components";
import AppointForm from "./form/AppointForm";

const Appointment = () => {
  return (
    <Wrapper id="appointment">
      <div className="container">
        <div className="appointment">
          <div className="appointment-form">
            <div className="form" data-aos="zoom-in-up">
              <div className="form-title">
                <p>We are here for you</p>
                <h2>Book Appointment</h2>
              </div>
              <AppointForm />
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
  margin: 60px 0;
  background-image: url("/images/appointment.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .appointment {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 100px 0;

    .appointment-form {
      width: 35%;
      .form {
        background: #d0df56;
        padding: 40px;
        .form-title {
          p {
            text-transform: uppercase;
            font-weight: 700;
            font-size: 14px;
            letter-spacing: -0.5px;
            margin: 0;
          }
          h2 {
            font-size: 30px;
            font-weight: 700;
            color: #6ec1e4;
          }
        }
        select,
        input {
          background: #d0df56;
        }
      }
    }

    @media (max-width: 1020px) {
      .appointment-form {
        width: 50%;
      }
    }
    @media (max-width: 768px) {
      justify-content: center;
      .appointment-form {
        width: 90%;
      }
    }
  }
`;
export default Appointment;
