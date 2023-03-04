import React from "react";
import styled from "styled-components";

const ConsultForm = () => {
  return (
    <Wrapper>
      <form action="#">
        <input type="text" placeholder="Full Name *" required />
        <input type="email" placeholder="Email *" required />
        <input type="phone" placeholder="Phone Number *" required />
        <input type="text" placeholder="I'm interested in *" required />
        <textarea
          name="massage"
          id="massage"
          cols="30"
          rows="5"
          placeholder="Massage"
        ></textarea>
        <button type="submit" className="btn-my">
          Send massage
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
        <p className="replay-text">We will contact you as soon as possible</p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  form {
    input,
    textarea {
      width: 100%;
      background: #d0df56;
      border: 1px solid #333;
      padding: 15px;
      color: #000;
      outline: none;
      margin: 10px 0;
      &::placeholder {
        color: #000;
      }
    }
    .btn-my {
      width: 100%;
      background: #062a4d;
      color: #fff;
      margin: 10px 0;
      i {
        margin-left: 15px;
      }
      &:hover {
        background: #041b32;
      }
    }
    .replay-text {
      text-align: center;
      padding-top: 10px;
    }
  }
`;
export default ConsultForm;
