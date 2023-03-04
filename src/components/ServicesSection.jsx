import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { servicesData } from "../data/data";
import ServiceCart from "./ServiceCart";

const ServicesSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="service">
          <div className="title">
            <h2>Best Our Services</h2>
            <p>Best Laboratory Analysis Available</p>
          </div>
          <div className="cart-box">
            <div className="row">
              {servicesData.map((curElem, index) => {
                return curElem.featured ? (
                  <ServiceCart data={curElem} key={index} />
                ) : null;
              })}
            </div>
          </div>
          <div className="to-service-page">
            <NavLink to="/services">
              view all services
              <i className="fa-solid fa-arrow-right-long"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  background: #e5f3f4;
  padding: 150px 0;
  margin-bottom: 50px;
  .service {
    .cart-box {
      width: 90%;
      margin: auto;
    }
    .to-service-page {
      text-align: center;
      margin-top: 30px;
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #000;
        font-weight: 500;
        font-family: "PT Serif", serif;

        i {
          margin-left: 15px;
        }

        &:hover {
          color: #d0df56;
        }
      }
    }
  }
`;
export default ServicesSection;
