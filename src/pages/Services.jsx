import styled from "styled-components";
import Appointment from "../components/Appointment";
import CommonHero from "../components/CommonHero";
import ServiceCart from "../components/ServiceCart";
import Testimonial from "../components/Testimonial";
import { servicesData } from "../data/data";

const Services = () => {
  return (
    <Wrapper>
      <CommonHero title="services" bgImg="service-hero.jpg" />
      <div className="service">
        <div className="container">
          <div className="title">
            <h2>Best Our Services</h2>
            <p>Best Laboratory Analysis Available</p>
          </div>
          <div className="cart-box">
            <div className="row">
              {servicesData.map((curElem, index) => {
                return <ServiceCart data={curElem} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <Testimonial />
      </div>
      <Appointment />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .service {
    padding: 100px 0;
    background: #e5f3f4;
    .cart-box {
      width: 90%;
      margin: auto;
    }
  }
  #appointment {
    margin: 0;
  }
  .testimonial {
    background-image: url("./images/testimonial-bg.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 80px 100px;
  }
`;
export default Services;
