import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DrSocial from "./DrSocial";
import ImageTitle from "./ImageTitle";

const DoctorCart = ({ data }) => {
  const { id, sortDisc, social } = data;
  return (
    <Wrapper className="doctor-cart" data-aos="flip-left">
      <NavLink to={`/singledoctor/${id}`} className="link">
        <i className="fa-solid fa-arrow-up-right-from-square arrow-box"></i>
        <ImageTitle data={data} />
      </NavLink>
      <p>{sortDisc.slice(0, 77)}</p>
      <DrSocial social={social} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;

  .link {
    position: relative;
    transition: all 0.4s linear;
    .arrow-box {
      position: absolute;
      top: 30px;
      right: 50%;
      color: #fff;
      background: #d0df56;
      padding: 15px;
      font-size: 18px;
      border-radius: 50%;
      z-index: 4;
    }
    &:hover {
      .arrow-box {
        color: #6a6a6a;
      }
    }
  }
  p {
    font-size: 15px;
    color: #6a6a6a;
  }
`;
export default DoctorCart;
