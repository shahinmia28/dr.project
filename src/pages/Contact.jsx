import React from "react";
import styled from "styled-components";
import CommonHero from "../components/CommonHero";
import ContactForm from "../components/form/ContactForm";
import Subscribe from "../components/Subscribe";
import { contactData } from "../data/data";

const Contact = () => {
  return (
    <Wrapper>
      <CommonHero title="contact" bgImg="contact.jpg" />
      <div className="contact-info">
        <div className="container">
          <div className="contact-info-title">
            <h2>Contact Info</h2>
            <p>
              We have worked hard to make this great theme which has infinite
              possibilities, which <br /> mean infinite layout combinations
            </p>
          </div>
          <div className="row">
            {contactData.map((curElem, i) => (
              <div className="col-12 col-md-6 col" key={i}>
                <div className="cart">
                  <div className="address">
                    <i className="fa-regular fa-compass"></i>
                    <h6>{curElem.address}</h6>
                  </div>
                  <div className="phone d-flex">
                    <i className="fa-solid fa-phone"></i>
                    <h6>{curElem.phone[0]}</h6>
                    <h6>{curElem.phone[1]}</h6>
                  </div>
                  <div className="email">
                    <i className="fa-regular fa-envelope"></i>
                    <h6>{curElem.email}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contact-map">
        <iframe src="https://maps.google.com/maps?q=tangail&t=&z=9&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>
      <div className="contact-form">
        <div className="container">
          <div className="form-title">
            <h2>Send Your Details</h2>
            <p>Please submit the form we will contact you shortly.</p>
          </div>
          <ContactForm />
        </div>
      </div>
      <div className="contact-brand-img">
        <div className="contact-brand-title">
          <span className="text-muted">Contact Us In Any Of Our Offices</span>
          <h2>
            Over 10 years we have <br /> been helping build Brands in the World
          </h2>
        </div>
      </div>
      <Subscribe />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  .contact-info {
    background: #d0df56;
    padding: 100px 0;
    .contact-info-title {
      text-align: center;
      padding: 30px;
      h2 {
        font-size: 45px;
        font-weight: 700;
        padding: 20px;
      }
      p {
        font-size: 17px;
        font-weight: 400;
      }
    }
    .row {
      display: flex;
      justify-content: space-around;
      .col {
        width: 400px;
        padding: 0;
        margin: 10px 0;
        .cart {
          width: 400px;
          padding: 10px;
          div {
            display: flex;
            align-items: center;
            padding: 7px 0;
            i {
              margin-right: 10px;
              background: #6ec1e4;
              font-size: 12px;
              padding: 3px;
              color: #d0df56;
              border-radius: 3px;
            }
            h6 {
              font-size: 15px;
              font-weight: 700;
              margin: 0;
            }
          }
          .phone {
            justify-content: start;
            h6 {
              width: 30%;
            }
          }
        }
      }
    }
  }
  .contact-map {
    iframe {
      width: 100%;
      height: 500px;
    }
  }
  .contact-form {
    background: #d0df56;
    .form-title {
      text-align: center;
      padding-top: 50px;
      h2 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 40px;
      }
    }
  }
  .contact-brand-img {
    background-image: url("./images/contact-2.jpg");
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    .contact-brand-title {
      padding-top: 90px;
      padding-bottom: 400px;
      text-align: center;
      span {
        font-size: 17px;
        font-weight: 500;
      }
      h2 {
        font-weight: 700;
        font-size: 40px;
        margin-bottom: 100px;
      }
    }
  }
`;
export default Contact;
