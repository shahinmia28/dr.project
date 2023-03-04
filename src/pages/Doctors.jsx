import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CommonHero from "../components/CommonHero";
import DoctorCart from "../components/doctor/DoctorCart";
import DrSocial from "../components/doctor/DrSocial";
import ImageTitle from "../components/doctor/ImageTitle";
import SubscribeAppoint from "../components/SubscribeAppoint";
import { DoctorData } from "../data/data";

const Doctors = () => {
  return (
    <Wrapper>
      <CommonHero title="Doctors" bgImg="single-service-hero.jpg" />
      <div className="container">
        <div className="doctors-list">
          <div className="title">
            <h2>Our Best Doctor</h2>
            <p>Professionals</p>
          </div>
          <div className="row">
            {DoctorData.map((curElem, i) => {
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
    margin: 80px 0;
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
export default Doctors;
