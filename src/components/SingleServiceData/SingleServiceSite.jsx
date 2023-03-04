import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { careService } from "../../data/data";
import AppointForm from "../form/AppointForm";

const SingleServiceSite = () => {
  return (
    <Wrapper>
      <div className="site">
        <div className="care-service">
          <h3>CARE SERVICES</h3>
          <ul>
            {careService.map((curElem, i) => (
              <li key={i}>
                <NavLink to={`/${curElem.id}`}>
                  <i className="fa-solid fa-angle-right"></i> {curElem.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="appointment-form">
          <AppointForm />
        </div>
        <div className="question-img" data-aos="fade-up">
          <NavLink to="/question">
            <img
              src="../images/service-detail-image-have-question.jpg"
              alt="q&a"
            />
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .site {
    margin: 30px;
    padding: 30px;
    height: 100%;
    .care-service {
      h3 {
        font-size: 20px;
        font-family: "PT Serif", serif;
        margin-bottom: 20px;
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          margin: 10px 0;
          padding: 10px 0;
          border-bottom: 1px solid #d5d5d5;
          a {
            text-decoration: none;
            color: #909090;
            i {
              margin-right: 10px;
            }
          }
          &:hover {
            a {
              color: #d0df56;
            }
          }
        }
      }
    }
    .appointment-form {
      margin: 50px 0;
    }
    .question-img {
      a {
        img {
          width: 100%;
        }
      }
    }
  }
`;
export default SingleServiceSite;
