import React from "react";
import styled from "styled-components";

const Poster = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="poster row">
          <div className="image-poster col col-12 col-lg-6">
            <div className="image row">
              <div className="col-6">
                <figure data-aos="fade-up">
                  <img src="./images/second-1.jpg" alt="1" />
                </figure>
                <figure data-aos="fade-up">
                  <img src="./images/second-3.jpg" alt="3" />
                </figure>
              </div>
              <div className="col-6 mt-md-5 pt-md-4">
                <figure data-aos="fade-up">
                  <img src="./images/second-2.jpg" alt="2" />
                </figure>
                <figure data-aos="fade-up">
                  <img src="./images/second-4.jpg" alt="4" />
                </figure>
              </div>
            </div>
          </div>
          <div className="data-poster col col-12 col-lg-6" data-aos="zoom-in">
            <div className="title">
              <h2>The Dental Center National Hospital</h2>
            </div>
            <p className="text-muted">
              One of the essential qualities of a professional doctor is his
              humanity. At our clinic, we take a great care of your health,
              mental and physical.
            </p>
            <p>
              “One of the most important factors about people’s lives is the
              information of, the use of, and the growing knowledge of medicine.
              Medicine is a form of art. It depends on how skillfully doctors
              apply their knowledge when dealing with patients.”
            </p>
            <h3 className="name">Ataturk Changes </h3>
            <span>Cardiac surgery</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .poster {
    margin: 50px 0;
    width: 100%;
    padding: 60px 40px;
    align-items: center;
    .image-poster {
      margin: 0;
      padding: 0;
      .image {
        padding: 15px;
        margin: 0;
        width: 100%;
        justify-content: space-around;
        div {
          padding-right: 0;
        }
        figure {
          width: 100%;
          margin-bottom: 12px;
          overflow: hidden;
          img {
            width: 100%;
            transition: all 0.4s linear;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }
    .data-poster {
      padding: 60px;
      .title {
        text-align: start;
        h2 {
          &::before {
            left: 0;
          }
        }
      }
      p {
        padding-top: 10px;
        font-size: 17px;
        text-align: justify;
      }
      h3 {
        color: #6ec1e4;
        font-weight: 700;
        font-size: 30px;
        padding-top: 30px;
        margin: 0;
      }
      span {
        color: #50aab2;
        font-size: 15px;
      }
    }
    @media (max-width: 772px) {
      padding: 10px 0px;
      .image-poster {
        .image {
          padding: 0px;
        }
      }
      .data-poster {
        padding: 50px 10px;
        text-align: center;
        .title {
          text-align: center;
          h2 {
            &::before {
              left: 50%;
            }
          }
        }
        p {
          padding-top: 0px;
          text-align: center;
        }
        h3 {
          padding-top: 0px;
        }
      }
    }
  }
`;
export default Poster;
