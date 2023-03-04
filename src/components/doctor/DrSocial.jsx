import React from "react";
import styled from "styled-components";

const DrSocial = ({ social }) => {
  return (
    <Wrapper>
      {social.map((curIcon, i) => (
        <a href="#" key={i} className="icon">
          <i className={curIcon}></i>
        </a>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .icon {
    color: #6a6a6a;
    text-decoration: none;
    padding: 7px;
    font-size: 20px;
    &:hover {
      color: #000 !important;
    }
  }
`;
export default DrSocial;
