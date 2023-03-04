import React from "react";
import styled from "styled-components";
import CaregiverCart from "../components/CaregiverCart";
import CommonHero from "../components/CommonHero";
import DoctorCart from "../components/doctor/DoctorCart";
import SubscribeAppoint from "../components/SubscribeAppoint";
import { DoctorData } from "../data/data";

const Caregivers = () => {
  return (
    <Wrapper>
      <CommonHero title="Caregivers" bgImg="caregivers.jpg" />
      <CaregiverCart />

      <div className="doctors-list">
        <div className="container">
          <div className="title">
            <h2>A Professional Care Provider</h2>
            <p>
              We have freelance doctors and physicists who are available at all
              time to deliver <br /> on- <br /> demand diagnoses and other
              health related services.
            </p>
          </div>

          <div className="row">
            {DoctorData.slice(4, 12).map((curElem, i) => {
              return (
                <div className="col-12 col-md-6 col-lg-3 col" key={i}>
                  <DoctorCart data={curElem} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SubscribeAppoint />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .doctors-list {
    padding: 60px 0;
    background: #e5f3f4;
    z-index: 1;
    .title {
      padding-top: 60px;
      h2 {
        &::before {
          display: none;
        }
      }
      p {
        text-align: center;
      }
    }
    .row {
      margin: 30px 0;
      .col {
        padding: 10px;
        a {
          color: #6a6a6a;
          text-decoration: none;
        }
      }
    }
  }
`;
export default Caregivers;
