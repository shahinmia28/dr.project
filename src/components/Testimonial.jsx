import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };
  return (
    <Wrapper className="testimonial">
      <div className="container">
        <Slider {...settings} className="slider">
          <div className=" slide first">
            <p>
              Great doctor if you need your furry family member to get effective
              immediate assistance, examination, emergency treatment or a
              consultation. Thank you!
            </p>
            <h3>Ataturk Changes</h3>
            <span>Cardiac surgery</span>
          </div>
          <div className=" slide second">
            <p>
              Great doctor if you need your furry family member to get effective
              immediate assistance, examination, emergency treatment or a
              consultation. Thank you!
            </p>
            <h3>John Doe</h3>
            <span>Designer</span>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 20px;
  .slider {
    padding: 10px;
    margin: auto 30px;
    .slide {
      text-align: center;
      padding: 20px 30px;
      p {
        font-size: 20px;
        @media (max-width: 992px) {
          font-size: 15px;
        }
      }
      h3 {
        font-size: 20px;
        margin-top: 30px;
      }
      span {
        font-size: 14px;
        color: #50aab2;
      }
    }
  }
`;
export default Testimonial;
