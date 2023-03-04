import React from "react";
import styled from "styled-components";

const SubscribeForm = () => {
  return (
    <Wrapper className="form">
      <form action="#">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
        <button type="submit" className="btn-my">
          Subscribe
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  form {
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    input {
      height: 100%;
      outline: none;
      padding: 15px;
      width: 58%;
      background: transparent;
      border: 1px solid #333;
    }
    button {
      width: 40%;
      height: 100%;
      background: #062a4d;
      color: #fff;
      i {
        margin-left: 5px;
      }
      &:hover {
        background: #051e37;
      }
    }
  }
`;
export default SubscribeForm;
