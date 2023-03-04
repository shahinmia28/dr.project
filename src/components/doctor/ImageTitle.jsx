import React from "react";
import styled from "styled-components";

const ImageTitle = ({ data }) => {
  return (
    <Wrapper>
      <div className="image-title">
        <img src={`/images/${data.img}`} alt="id" />
        <h3>{data.name}</h3>
        <span>{data.specialty}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .image-title {
    text-align: center;
    padding: 30px 0;
    img {
      width: 220px;
      height: 100%;
      border-radius: 50%;
      margin-bottom: 30px;
      position: relative;
    }
    h3 {
      color: #333;
      font-size: 20px;
      text-transform: capitalize;
      font-weight: 600;
      font-family: "PT Serif", serif;
      margin: 0;
    }
    span {
      color: #6ec1e4;
      font-size: 15px;
    }
  }
`;
export default ImageTitle;
