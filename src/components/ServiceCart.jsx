import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ServiceCart = ({ data }) => {
  return (
    <Wrapper className="col-12 col-md-4">
      <NavLink to={`/singleservice/${data.id}`}>
        <div className="cart" data-aos="fade-up">
          <div className="cart-img">
            <img src={data.img} alt={data.img} />
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="cart-title">
            <div className="text">
              <h3> {data.title}</h3>
              <p>While a patient is being medically cared for in the...</p>
            </div>
          </div>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  a {
    color: #000;
    text-decoration: none;
  }
  .cart {
    width: 100%;
    height: 450px;
    background: #ff6e6e;
    margin: 10px 0;
    transition: all 0.3s linear;
    position: relative;
    overflow: hidden;
    &:hover {
      .cart-img {
        top: -30px;
        transform: scale(1.2);
        .plus {
          display: flex;
          i {
            margin-bottom: 100px;
          }
        }
      }
      .cart-title {
        height: 70%;
        .text {
          h3 {
            margin-top: 50px;
          }
        }
      }
    }
    .cart-img {
      width: 100%;
      height: 70%;
      background: #9bbd5c;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s linear;
      z-index: 1;

      img {
        width: 100%;
        height: 100%;
        position: relative;
      }
      .plus {
        position: absolute;
        top: 0px;
        left: 0;
        background: #062a4d7e;
        width: 100%;
        height: 100%;
        display: none;
        justify-content: center;
        align-items: center;
        transition: all 0.3s linear;
        i {
          font-size: 40px;
          z-index: 5;
          color: #b8df6e;
          font-weight: 100;
          transition: all 0.3s linear;
          &:hover {
            color: #cefd77;
          }
        }
      }
    }
    .cart-title {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      margin-top: 15px;
      background: #fff;
      z-index: 5;
      transition: all 0.3s ease-in;
      text-align: center;
      border-top: 10px solid #e5f3f4;
      .text {
        height: 70%;
        width: 70%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        h3 {
          text-transform: capitalize;
          margin-top: 120px;
          transition: all 0.3s linear;
        }
        p {
          margin-top: 10px;
          padding: 20px;
          transition: all 0.3s linear;
        }
      }
    }
  }
`;
export default ServiceCart;
