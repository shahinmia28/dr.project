import React from "react";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 info">
            <div className="about-cart">
              <h2>Hello, I'm a Dr.Changes</h2>
              <p>
                dolor in hendrerit in vulputate velit esse molestie consequat,
                vel illum dolore eu feugiat nulla facilisis at vero.Etiam sit
                amet orci eget eros faucibus tincidunt
              </p>
              <ul>
                <li>
                  <i className="fa-regular fa-pen-to-square"></i>
                  <p>NAME: GEORGE PARKER</p>
                </li>
                <li>
                  <i className="fa-regular fa-envelope"></i>
                  <p>EMAIL: POWERWORKING@GMAIL.COM</p>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <p>PHONE: 379-854-4489 (159) 362-1199</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-8 images">
            <figure>
              <img src="/images/about1.jpg" alt="1" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 50px 0;
  .row {
    position: relative;
    .info {
      display: flex;
      justify-content: center;
      .about-cart {
        background: #062a4d;
        color: #fff;
        padding: 80px 35px;
        position: absolute;
        top: -150px;
        h2 {
          font-size: 45px;
          font-weight: 700;
          padding-bottom: 20px;
        }
        ul {
          list-style-type: none;
          padding: 10px 0;
          li {
            display: flex;
            align-items: center;
            padding: 5px 0;
            i {
              margin-right: 10px;
              background: #fff;
              color: #062a4d;
              padding: 2.5px;
              font-size: 10px;
              border-radius: 3px;
            }
            p {
              margin: 0;
              font-weight: 600;
              font-size: 15px;
            }
          }
        }
      }
    }
  }
  .images {
    img {
      width: 100%;
      padding: 10px 50px;
    }
  }
  @media (max-width: 992px) {
    padding: 0;
    .container {
      width: 100%;
      padding: 0;
      .row {
        .info {
          .about-cart {
            width: 100%;
            position: sticky;
            top: 0px;
          }
        }
      }
      .images {
        img {
          padding: 0px;
        }
      }
    }
  }
`;
export default AboutMe;
