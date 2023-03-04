import React from "react";
import styled from "styled-components";

const TopBar = () => {
  return (
    <Wrapper className="d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-3 d-flex">
            <i className="fa-solid fa-envelope-open-text text-muted"></i>
            <div className="icon-font">
              <h5>TELL US THE REASON FOR YOUR QUERY</h5>
              <span className="text-muted">drchanges@example.com</span>
            </div>
          </div>
          <div className="col-3 d-flex">
            <i className="fa-regular fa-compass text-muted"></i>
            <div className="icon-font">
              <h5>6281 LIANA EXTENSIONS, LEMKEPORT</h5>
              <span className="text-muted">Lake Ashlyhaven, NY</span>
            </div>
          </div>
          <div className="col-3 d-flex phone">
            <i className="fa-solid fa-headset"></i>
            <h4>+880 1777 29 69 33</h4>
          </div>
          <div className="col-3 d-flex social-icon">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-google-plus-g"></i>
            <i className="fa-brands fa-skype"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .row {
    padding: 20px 0;
    i {
      font-size: 20px;
      margin-right: 10px;
    }
    .phone {
      justify-content: end;
      color: #6ec1e4;
      h4 {
        font-size: 20px;
        font-weight: 300;
      }
    }
    .social-icon {
      justify-content: end;
      i {
        margin-right: 5px;
        color: #000;
        transition: all 0.4s linear;
        &:hover {
          color: #d0df56;
        }
      }
    }
  }
`;
export default TopBar;
