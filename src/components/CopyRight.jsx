import React from "react";
import styled from "styled-components";
import Logo from "./header/Logo";

const CopyRight = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-4 ">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-google-plus-g"></i>
            <i className="fa-brands fa-skype"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
          <div className="col col-12 col-md-4">
            <Logo />
          </div>
          <div className="col col-12 col-md-4">
            <p>
              Dr.Changes
              <span className="text-muted">
                &copy; 2019. All Rights Reserved
              </span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding: 30px 0;
  background: #062a4d;
  color: #fff;
  .row {
    align-items: center;
    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      i {
        margin-right: 10px;
        color: #b4b4b4;
        transition: all 0.4s linear;
        &:hover {
          color: #d0df56;
        }
      }
      p {
        margin: auto;
        font-size: 17px;
        span {
          font-size: 17px;
          margin-left: 10px;
          font-family: "Roboto", sans-serif;
        }
      }
    }
  }
`;
export default CopyRight;
