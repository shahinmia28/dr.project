import React from "react";
import styled from "styled-components";
import { expectData } from "../data/data";

const ExpectUs = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="expect-us">
          <div className="title">
            <h2>What to Expect From Us</h2>
            <p>Best Laboratory Analysis Available</p>
          </div>
          <div className="items-box row">
            {expectData.map((curElem, i) => (
              <div className="item col-6 col-lg-3" key={i}>
                <div className="box" data-aos="flip-left">
                  <img src={curElem.img} alt={i} />
                  <h4>{curElem.title}</h4>
                  <span>{curElem.docs}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  margin: 50px 0;
  .expect-us {
    .items-box {
      padding-bottom: 60px;
      padding-top: 30px;
      .item {
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          padding: 20px 30px;
          img {
            width: 100px;
            height: 100px;
            margin-bottom: 30px;
            transition: all 0.3s linear;
            &:hover {
              transform: scale(1.1);
            }
          }
          h4 {
            color: #333;
            font-size: 20px;
            font-family: "PT Serif", serif;
          }
          span {
            font-size: 15px;
            font-family: "Roboto", sans-serif;
            margin-top: 20px;
            line-height: 30px;
            color: #555;
          }
        }
      }
    }
  }
  @media (max-width: 772px) {
    .expect-us {
      .items-box {
        padding: 0px;
        .item {
          .box {
            padding: 10px 3px;
            img {
              width: 50px;
              height: 50px;
              margin-bottom: 10px;
            }
            h4 {
              font-size: 15px;
            }
            span {
              font-size: 13px;
              margin-top: 5px;
              line-height: 13px;
            }
          }
        }
      }
    }
  }
`;
export default ExpectUs;
