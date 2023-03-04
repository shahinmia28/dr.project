import React, { useState } from "react";
import styled from "styled-components";
import CommonHero from "../components/CommonHero";
import Subscribe from "../components/Subscribe";
import { licenseFaq, generalFaq } from "../data/data";

const Faq = () => {
  const [answer, setAnswer] = useState([]);

  const showData = (data) => {
    if (data === answer) {
      setAnswer([]);
    } else {
      setAnswer(data);
    }
  };
  return (
    <Wrapper>
      <CommonHero title="Faqs" bgImg="caregivers.jpg" />

      <div className="licenses-questions">
        <div className="container">
          <h2>Regular & Extended Licenses</h2>
          <div className="questions-holder">
            {licenseFaq.map((curElem, i) => {
              return (
                <div className="item" key={i} onClick={() => showData(curElem)}>
                  <div
                    className={
                      answer === curElem ? "question active" : "question"
                    }
                  >
                    <h6>{curElem.question}</h6>

                    {answer === curElem ? (
                      <i className="fa-solid fa-minus"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}
                  </div>
                  <div className="answer-box">
                    {answer === curElem ? (
                      <div className="answer " data-aos="fade-down">
                        <p>{curElem.answer[0]}</p>
                        <p>{curElem.answer[1]}</p>
                        <ul className="text-muted">
                          {curElem.list.map((curList, i) => (
                            <li key={i}>{curList}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="general-questions">
        <div className="container">
          <h2>General Questions</h2>
          <div className="questions-holder">
            {generalFaq.map((curElem, i) => {
              return (
                <div className="item" key={i} onClick={() => showData(curElem)}>
                  <div
                    className={
                      answer === curElem ? "question active" : "question"
                    }
                  >
                    {answer === curElem ? (
                      <i className="fa-solid fa-minus"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}

                    <h6>{curElem.question}</h6>
                  </div>
                  <div className="answer-box">
                    {answer === curElem ? (
                      <div className="answer " data-aos="fade-down">
                        <p>{curElem.answer}</p>
                        <ul className="text-muted">
                          {curElem.list.map((curList, i) => (
                            <li key={i}>{curList}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Subscribe />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    font-weight: 700;
    font-size: 40px;
  }
  .licenses-questions {
    padding: 100px 0;
  }
  .questions-holder {
    margin-top: 40px;
    .item {
      .question {
        background: #fff;
        border-bottom: 1px solid #bdbdbd;
        padding: 20px 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h6 {
          color: #6ec1e4;
          margin-bottom: 0;
          font-size: 15px;
        }
        i {
          background: #6ec1e4;
          color: #fff;
          border-radius: 3px;
          padding: 2px 3px;
          font-size: 10px;
        }
        &.active {
          h6 {
            color: #4c4c4c;
          }
          i {
            background: #4c4c4c;
          }
        }
      }
      .answer-box {
        overflow: hidden;
        .answer {
          background: #fff;
          padding: 20px;
          overflow: hidden;
          transition: all 0.4s linear;
        }
      }
    }
  }

  .general-questions {
    background: #e5f3f4;
    padding: 100px 0;
    .questions-holder {
      .item {
        margin: 20px 0;
        .question {
          justify-content: start;
          border-bottom: none;
          padding: 20px;
          h6 {
            color: #2c2c2c;
          }
          i {
            margin-right: 15px;
            background: #2c2c2c;
          }
          &.active {
            background: #d0df56;
            i {
              color: #d0df56;
            }
          }
        }
      }
    }
  }
`;
export default Faq;
