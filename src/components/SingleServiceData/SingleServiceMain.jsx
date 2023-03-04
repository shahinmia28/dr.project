import React, { useState } from "react";
import styled from "styled-components";

const SingleServiceMain = ({ data }) => {
  const { id, title, img, imgList, docs, cot, list } = data;
  const [titleImg, setTitleImg] = useState(img);

  return (
    <Wrapper>
      <div className="img-section row">
        <div className="title-img col-12 col-lg-6">
          <figure data-aos="fade-up">
            <img src={`.${titleImg}`} alt={id} />
          </figure>
        </div>
        <div className="list-img col-12 col-lg-6">
          <figure className="row" data-aos="fade-up">
            {imgList.map((curImg, i) => (
              <img
                src={`.${curImg}`}
                alt={id}
                key={i}
                className="col-6"
                onClick={() => setTitleImg(curImg)}
              />
            ))}
          </figure>
        </div>
      </div>
      <div className="data-section">
        <div className="list" data-aos="fade-up">
          <ul className="row">
            {list.map((curList, i) => (
              <li key={i} className="col-12 col-lg-6">
                {curList}
              </li>
            ))}
          </ul>
        </div>
        <div className="docs" data-aos="fade-up">
          <h3>Why Choose daily care?</h3> <p>{docs} </p>
        </div>
        <div className="cot row">
          {cot.map((curCot, i) => (
            <div key={i} className="cot-cart col-12 col-md-6">
              <div className="cart" data-aos="fade-up">
                <h3>{curCot.title}</h3>
                <p>{curCot.disc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 50px 0;
  margin: 0;
  .img-section {
    margin: 0;
    justify-content: space-between;
    align-items: center;
    .title-img {
      figure {
        margin: 0;
        img {
          width: 100%;
        }
      }
    }
    .list-img {
      figure {
        margin: 0;
        img {
          padding: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .data-section {
    margin: 30px 0;
    .list {
      margin: 30px 0;
      ul {
        li {
          padding: 6px 0;
          font-size: 17px;
        }
      }
    }
    .docs {
      h3 {
        font-size: 25px;
        font-weight: 700;
        margin: 15px 0;
        color: #6ec1e4;
      }
      p {
        font-size: 17px;
        padding-right: 20px;
      }
    }
    .cot {
      margin: 30px 0;
      justify-content: space-between;
      .cot-cart {
        justify-content: space-between;
        align-items: center;
        .cart {
          margin: 10px;
          width: 80%;
          h3 {
            font-size: 30px;
            font-weight: 700;
            margin: 15px 0;
            color: #6ec1e4;
          }
          p {
            font-size: 17px;
            color: #555;
          }
        }
      }
    }
  }
`;
export default SingleServiceMain;
