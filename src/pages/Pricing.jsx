import React, { useState } from "react";
import styled from "styled-components";
import CommonHero from "../components/CommonHero";
import SubscribeAppoint from "../components/SubscribeAppoint";
import { pricing } from "../data/data";

const Pricing = () => {
  const [month, setMonth] = useState(true);
  const [year, setYear] = useState(false);

  return (
    <Wrapper>
      <CommonHero title="Pricing" bgImg="single-service-hero.jpg" />
      <div className="container">
        <div className="title">
          <h2>A monthly fee. No costly surprises</h2>
          <p>Pricing And Plan</p>
        </div>
        <div className="switch-btn">
          <button
            className={month ? "active" : ""}
            onClick={() => {
              setMonth(true);
              setYear(false);
            }}
          >
            Per month
          </button>
          <button
            className={year ? "active" : ""}
            onClick={() => {
              setMonth(false);
              setYear(true);
            }}
          >
            Per year
          </button>
        </div>
        <div className="pricing-plan">
          <div className="row">
            {pricing.map((curElem, i) => {
              return (
                <div className="col-12 col-lg-4 my-3" key={i}>
                  <div className={`price-cart ${curElem.id}`}>
                    {curElem.id === "standard" ? (
                      <span className="popular">
                        POPULAR <br /> CHOICE
                      </span>
                    ) : null}
                    <h3>{curElem.title}</h3>
                    <img src={`/images/${curElem.img}`} alt="" />
                    <div className="price">
                      {month ? (
                        <p>
                          <i className="fa-solid fa-dollar-sign"></i>
                          {curElem.priceMonth} <i> / month</i>
                        </p>
                      ) : (
                        <p>
                          <i className="fa-solid fa-dollar-sign"></i>
                          {curElem.priceYear} <i>/ year</i>
                        </p>
                      )}
                    </div>
                    <ul className="service-list">
                      {curElem.sList !== undefined
                        ? curElem.sList.map((elem, i) => {
                            return (
                              <li key={i}>
                                {month ? (
                                  <i
                                    class={
                                      elem.monthly
                                        ? "fa-regular fa-square-check check"
                                        : "fa-regular fa-square-check"
                                    }
                                  ></i>
                                ) : (
                                  <i
                                    class={
                                      elem.yearly
                                        ? "fa-regular fa-square-check check"
                                        : "fa-regular fa-square-check"
                                    }
                                  ></i>
                                )}
                                <p>{elem.name}</p>
                              </li>
                            );
                          })
                        : null}
                    </ul>
                    <button className="btn-my" type="submit">
                      get started
                    </button>
                  </div>
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
  .title {
    margin-top: 60px;
  }
  .switch-btn {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    button {
      text-transform: uppercase;
      padding: 20px 30px;
      background: #ffffff;
      color: #636363;
      font-weight: 500;
      font-size: 16px;
      transition: all 0.4s linear;
      margin: 3px;
      border: 1px solid #b4b4b4;
      font-family: "PT Serif", serif;
      &.active {
        background: #d0df56;
      }
    }
  }
  .pricing-plan {
    margin: 50px 0;

    .price-cart {
      border: 1px solid #b4b4b4;
      padding: 30px;
      text-align: center;
      height: 100%;
      h3 {
        padding: 20px 0;
        font-family: "PT Serif", serif;
        font-size: 22px;
        font-weight: 600;
        color: #333;
      }
      img {
        width: 50%;
      }
      .price {
        padding: 20px 0;
        font-family: "PT Serif", serif;

        p {
          font-size: 25px;
          i {
            color: #777777;
            font-size: 22px;
            padding: 0 3px;
          }
        }
      }
      .service-list {
        list-style: none;
        text-align: left;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          margin: 5px 0;
          padding: 5px 0;
          border-bottom: 1px solid #d0d0d0;
          i {
            margin-right: 10px;
            font-size: 22px;
            color: #888;
            &.check {
              color: #d0df56;
            }
          }
          p {
            padding: 0;
            margin: 0;
            font-size: 16px;
            font-weight: 500;
            color: #555;
          }
        }
      }
      .btn-my {
        width: 100%;
        margin: 20px 0;
        color: #ffffff;
        background: #062a4d;
        &:hover {
          background: #062a4d;
          color: #d0df56;
        }
      }
    }
    .standard {
      position: relative;
      overflow: hidden;
      .popular {
        font-weight: 700;
        font-size: 11px;
        padding: 60px;
        padding-bottom: 10px;
        background: #d0df56;
        display: block;
        transform: rotate(45deg);
        position: absolute;
        right: -65px;
        top: -35px;
      }
      .btn-my {
        background: #d0df56;
        color: #333;
      }
    }
  }
`;
export default Pricing;
