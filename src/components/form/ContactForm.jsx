import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { toast } from "react-custom-alert";

const ContactForm = () => {
  const form = useRef();
  const alertInfo = (text) => toast.success(text);
  // const reload = (delay) => {
  //   setTimeout(window.location.reload(), delay);
  // };
  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xnm01km",
        "template_bnsnecr",
        form.current,
        "jkYs_JR56BJQ6vazO"
      )
      .then(alertInfo("Thanks for your Massage!"));
  };

  return (
    <Wrapper className="form">
      <form ref={form} onSubmit={sendEmail} action="#">
        <div className="input-item-group">
          <input
            type="text"
            name="first-name"
            placeholder="First Name *"
            required
          />
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>
        <div className="input-item-group">
          <input type="email" name="email" placeholder="Email" />
          <input type="phone" name="phone" placeholder="Phone *" required />
        </div>
        <div className="input-item-group">
          <input type="number" name="age" placeholder="Age *" required />
          <input type="number" name="hight" placeholder="Hight in inches" />
          <input type="number" name="weight" placeholder="Weight in kg" />
        </div>
        <div className="gender-box">
          <p>Select your Gender: *</p>
          <div className="gender">
            <div className="male">
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="form-check-input"
                required
              />
            </div>
            <div className="female">
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="form-check-input"
                required
              />
            </div>
            <div className="other">
              <label htmlFor="other">Other</label>
              <input
                type="radio"
                className="form-check-input"
                id="other"
                name="gender"
                value="other"
                required
              />
            </div>
          </div>
        </div>
        <div className="input-item-group">
          <textarea
            name="massage"
            id="massage"
            cols="30"
            rows="10"
            placeholder="Describe Your Problem"
          ></textarea>
        </div>
        <div className="input-item-group button ">
          <button type="submit" className="btn-my">
            Sent
          </button>
          <button type="reset" className="btn-my reset">
            reset
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  form {
    padding: 30px;
    .input-item-group {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
      input,
      textarea {
        padding: 10px;
        width: 100%;
        margin: 10px;
        outline: none;
        background: transparent;
        border: 1px solid #666;
      }
    }
    .gender-box {
      margin: 10px;
      padding: 10px 0;
      display: flex;
      align-items: center;
      p {
        margin: 0;
        margin-right: 15px;
        padding: 0;
        font-weight: 600;
      }
      .gender {
        display: flex;
        align-items: center;
        justify-content: left;
        input {
          margin-right: 15px;
        }
        label {
          margin-right: 3px;
          color: #666;
        }
      }
      @media (max-width: 772px) {
        display: block;
        p {
          padding: 10px 0;
        }
      }
    }

    .button {
      justify-content: left;
      align-items: center;
      button {
        margin: 10px;
        background: #062a4d;
        color: #fff;
        overflow: hidden;
        &:hover {
          transform: scale(1.05);
        }
      }
      .reset {
        background: #e80000;
      }
    }
  }
`;
export default ContactForm;
