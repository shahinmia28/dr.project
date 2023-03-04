import React from "react";
import styled from "styled-components";
import VideoBtn from "../VideoBtn";

const OurStory = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="story">
          <div className="row">
            <div className="col-12 col-lg-8 image">
              <img src="/images/about2.jpg" alt="2" />
            </div>
            <div className="col-12 col-lg-4 info">
              <div className="info-cart">
                <div className="title">
                  <h2>Our Story</h2>
                  <p>
                    We are pleased to offer quick and thorough healthcare
                    services with an on-site laboratory and digital X-Ray
                    machine to help improve diagnosis
                  </p>
                </div>
                <div className="video-btn">
                  <VideoBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    .story {
      background: #062a4d;
      position: relative;
      .row {
        .image {
          img {
            width: 100%;
          }
        }
        .info {
          .info-cart {
            padding: 80px 50px;
            padding-right: 70px;
            .title {
              align-items: flex-start;
              text-align: left;
              h2 {
                padding-top: 40px;
                color: #fff;
                ::before {
                  background: #fff;
                  top: -10px;
                  left: 0;
                }
              }
              p {
                font-size: 18px;
                text-align: left;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`;
export default OurStory;
