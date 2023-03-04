import React from "react";
import styled from "styled-components";
import { percentage } from "../data/data";

const Trust = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="trust-us">
          <div className="section-data" data-aos="zoom-out-right">
            <h2>People Trust Me</h2>
            <h4>Because my patients are my family</h4>
            <p>
              One of the most important factors about people’s lives is the
              information of, the use of, and the growing knowledge of medicine.
              Medicine is a form of art. It depends on how skillfully doctors
              apply their knowledge when dealing with patients.
            </p>
            <div className="percentage">
              {percentage.map((curElem, i) => (
                <div className="item" key={i}>
                  <h1>{curElem.total}</h1>
                  <span>{curElem.name}</span>
                </div>
              ))}
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
  background-image: url("./images/sixth.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  .trust-us {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 100px 0;
    .section-data {
      width: 50%;
      padding: 20px;

      h2 {
        padding: 30px 0;
        font-size: 40px;
        font-weight: 700;
        color: #6ec1e4;
      }
      h4 {
        color: #333;
        padding: 20px 0;
        font-size: 30px;
      }
      p {
        font-size: 18px;
      }

      .percentage {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        .item {
          width: 30%;
          h1 {
            font-weight: 700;
            font-size: 60px;
            letter-spacing: -5px;
            color: #d0df56;
          }
          span {
            font-size: 16px;
            font-family: "Roboto", sans-serif;
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    .trust-us {
      .section-data {
        width: 90%;
        h2 {
          padding: 20px 0;
          font-size: 35px;
        }
        h4 {
          font-size: 25px;
        }
        p {
          font-size: 15px;
        }
        .percentage {
          .item {
            h1 {
              font-size: 35px;
              letter-spacing: -2px;
            }
            span {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
`;
export default Trust;
