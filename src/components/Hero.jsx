import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { sliderData } from "../data/data";

const Hero = () => {
  const [play, setPlay] = useState(false);

  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
  };

  return (
    <Wrapper>
      <Slider {...settings} className="slider">
        {sliderData.map((curElem, index) => {
          const { title, subtitle, img, id } = curElem;

          return (
            <div key={index} className="slide-item">
              <div
                className="bg-img"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <div className="container">
                  <div className="data">
                    <h6 className="sub-title text-muted" data-aos="fade-right">
                      {subtitle}
                    </h6>
                    <h2 className="hero-title" data-aos="fade-left">
                      {title}
                    </h2>
                    <div className="btn-group">
                      <button className="btn-my">
                        DISCOVER MORE
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </button>
                      <button
                        onClick={() => setPlay(!play)}
                        className="btn-watch"
                      >
                        {!play ? (
                          <i className="fa-solid fa-circle-play"></i>
                        ) : (
                          <i className="fa-solid fa-xmark"></i>
                        )}
                      </button>
                    </div>
                    <div className="bottom-style">
                      <button
                        type="button"
                        data-role="none"
                        className="big-btn d-none d-md-flex slick-arrow "
                        data-aos="fade-up"
                      >
                        <img
                          src="./images/thumbslider-1.jpg"
                          alt="thumbslider"
                        />
                        <div>
                          <h6 className="text-muted">{subtitle}</h6>
                          <h3>{title}</h3>
                        </div>
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </button>
                    </div>
                  </div>

                  {play ? (
                    <div className="video">
                      <iframe
                        src="https://www.youtube.com/embed/VWyqfkZwMaY"
                        title="Bootstrap5 Bangla Tutorial 25 : Project (part-1) | header design"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .slider {
    .slide-item {
      width: 100%;
      height: 600px;
      .bg-img {
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        .container {
          .data {
            height: 600px;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 80px;
            .sub-title {
              font-size: 20px;
              font-weight: 400;
              color: #062a4d;
            }
            .hero-title {
              font-size: 60px;
              line-height: 1;
              font-family: "PT Serif", serif;
              font-weight: 500;
              color: #062a4d;
            }
            .btn-group {
              display: flex;
              align-items: center;
              .btn-my {
                i {
                  margin-left: 10px;
                }
              }
              .btn-watch {
                border: none;
                background: #d0df56;
                margin-left: 20px;
                border-radius: 50%;
                width: 58px;
                padding: 5px;
                color: #062a4d;
                animation: watchAnim 2s linear infinite;
                i {
                  font-size: 45px;
                }
                @keyframes watchAnim {
                  0% {
                    box-shadow: 0 0 0 0 #062a4d;
                  }
                  50% {
                    box-shadow: 0 0 15px -1px #062a4d;
                  }
                  100% {
                    box-shadow: 0 0 0 0 #062a4d;
                  }
                }
              }
            }
            .bottom-style {
              .big-btn {
                align-items: center;
                justify-content: space-between;
                padding: 20px;
                border: none;
                color: #062a4d;
                img {
                  width: 80px;
                }
                div {
                  margin: 0 20px;
                  text-align: left;
                  h6 {
                    font-size: 15px;
                  }
                  h3 {
                    font-size: 20px;
                  }
                }
              }
            }
          }
          .video {
            position: absolute;
            top: 20px;
            right: 10px;
            z-index: 3;
            padding: 10px;
            iframe {
              border-radius: 10px;
              border: 3px solid #d0df56;
              width: 450px;
              height: 255px;
            }
          }
        }
      }

      /* Small Screen */
      @media (max-width: 768px) {
        height: 400px;
        .bg-img {
          .container {
            .data {
              height: 400px;
              padding: 20px 0;
              .sub-title {
                font-size: 17px;
              }
              .title {
                font-size: 40px;
              }
            }
            .video {
              top: 10px;
              iframe {
                width: 385px;
                height: 220px;
              }
            }
          }
        }
      }
    }
  }

  .slick-dots {
    bottom: 20px;
  }
`;

export default Hero;
