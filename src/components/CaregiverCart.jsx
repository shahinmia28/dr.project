import React from "react";
import styled from "styled-components";
import { caregivers } from "../data/data";

const CaregiverCart = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="caregiver-cart">
          <div className="row">
            {caregivers.map((curElem, i) => {
              return (
                <div className="col-12 col-md-4 col" key={i} data-aos="fade-up">
                  <div className="cart">
                    <img src={`/images/${curElem.img}`} alt={curElem.id} />
                    <h3>{curElem.title}</h3>
                    <p>{curElem.disc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  .caregiver-cart {
    padding: 50px 0;
    .row {
      width: 80%;
      margin: auto;
      .col {
        margin-bottom: -140px;
        background: #fff;
        z-index: 3;
        .cart {
          height: 100%;
          padding: 50px 30px;
          text-align: center;
          img {
            transition: all 0.4s linear;
            &:hover {
              transform: scale(0.9);
            }
          }
          h3 {
            padding: 20px 0;
            font-size: 20px;
            font-weight: 600;
            font-family: "PT Serif", serif;
          }
          p {
            font-size: 15px;
          }
        }
      }
    }
  }
`;
export default CaregiverCart;
