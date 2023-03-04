import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CommonHero = ({ title, bgImg }) => {
  return (
    <Wrapper
      className="hero"
      style={{ backgroundImage: `url(/images/${bgImg})` }}
    >
      <h1>{title}</h1>
      <NavLink to={"/"}>
        <i className="fa-solid fa-angle-left"></i> Home
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 100px 0;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  text-transform: uppercase;
  h1 {
    color: #fff;
    font-size: 50px;
  }
  a {
    font-size: 16px;
    text-decoration: none;
    font-weight: 700;
    color: #c2c2c2;
    &:hover {
      color: #d0df56;
    }
  }
`;
export default CommonHero;
