import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommonHero from "../components/CommonHero";
import DrSocial from "../components/doctor/DrSocial";
import ImageTitle from "../components/doctor/ImageTitle";
import SubscribeAppoint from "../components/SubscribeAppoint";
import { DoctorData } from "../data/data";

const SingleDoctor = () => {
  const [doctor, setDoctor] = useState([]);
  const [nextData, setNextData] = useState([]);
  const [prevData, setPrevData] = useState([]);

  const { id } = useParams();
  const next = () => {
    let i = DoctorData.indexOf(doctor);
    if (i >= 0 && i < DoctorData.length - 1) {
      setDoctor(DoctorData[i + 1]);
    } else {
      setDoctor(DoctorData[0]);
    }

    if (i >= 0 && i < DoctorData.length - 2) {
      setNextData(DoctorData[i + 2]);
      setPrevData(DoctorData[i]);
    } else {
      setNextData(DoctorData[0]);
    }
  };

  const prev = () => {
    let i = DoctorData.indexOf(doctor);
    if (i > 0) {
      setDoctor(DoctorData[i - 1]);
    } else {
      setDoctor(DoctorData[i + DoctorData.length - 1]);
    }
    if (i > 1) {
      setPrevData(DoctorData[i - 2]);
      setNextData(DoctorData[i]);
    } else {
      setPrevData(DoctorData[i + DoctorData.length - 2]);
    }
  };
  useEffect(() => {
    DoctorData.map((curElem) => {
      if (curElem.id === id) {
        setDoctor(curElem);
      }
    });
  }, []);

  return (
    <Wrapper>
      <CommonHero title={doctor.name} bgImg="single-service-hero.jpg" />
      <div className="container">
        <div className="button-group">
          <div onClick={() => prev()} className="arrow-btn">
            <button>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="prev">
              <p>Prev</p>
              <h4>{prevData.name}</h4>
            </div>
          </div>
          <div onClick={() => next()} className="arrow-btn">
            <div className="next">
              <p>Next</p>
              <h4>{nextData.name}</h4>
            </div>
            <button>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="single-doctor">
          <div className="row">
            <div className="col col-12 col-lg-4">
              <div className="doctor-intro">
                <div className="title-info">
                  <ImageTitle data={doctor} />
                </div>
                <div className="personal-info ">
                  <h4>Personal Info</h4>
                  <div>
                    <p>Phone:</p> <p>{doctor.phone}</p>
                  </div>
                  <div>
                    <p>Office:</p> <p>{doctor.office}</p>
                  </div>
                  <div>
                    <p>Email:</p> <p>{doctor.email}</p>
                  </div>
                  <div className="social-icon">
                    <p>Social: </p>
                    {doctor.social !== undefined ? (
                      <DrSocial social={doctor.social} />
                    ) : null}
                  </div>
                </div>
                <div className="emergency d-flex">
                  <i className="fa-solid fa-headset"></i>
                  <div>
                    <h4>EMERGENCY CASES</h4>
                    <h4>(225) 679-9399 </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col col-12 col-lg-8">
              <div className="doctor-disc">
                <p className="sort-disc">{doctor.sortDisc}</p>
                <p className="disc text-muted">{doctor.disc}</p>
                <div className="data-table">
                  <div className="item">
                    <p className="item-title">Specialty</p>
                    <p className="item-data">{doctor.specialty}</p>
                  </div>
                  <div className="item">
                    <p className="item-title">Degrees</p>
                    <p className="item-data">{doctor.degrees}</p>
                  </div>
                  <div className="item">
                    <p className="item-title">Training</p>
                    <p className="item-data">{doctor.training}</p>
                  </div>
                  <div className="item">
                    <p className="item-title">Work Days</p>
                    <div className="item-data workdays">
                      {doctor.workdays !== undefined
                        ? doctor.workdays.map((curElem, i) => (
                            <p key={i}>
                              <i className="fa-solid fa-check"></i>
                              <span> {curElem}</span>
                            </p>
                          ))
                        : null}
                    </div>
                  </div>
                  <div className="item">
                    <p className="item-title">Language</p>
                    <div className="item-data workdays">
                      {doctor.language !== undefined
                        ? doctor.language.map((curElem, i) => (
                            <p key={i}>{curElem}</p>
                          ))
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscribeAppoint />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .single-doctor {
    margin: 50px 0;
    .doctor-intro {
      width: 85%;
      margin: auto;
      .title-info {
        padding: 20px 0;
        border: 1px solid #e2e2e2;
        border-top: 4px solid #d0df56;
      }
      .personal-info {
        margin-top: 50px;
        padding: 40px;
        border: 1px solid #e2e2e2;
        border-top: 4px solid #d0df56;
        h4 {
          text-transform: uppercase;
          font-size: 20px;
          font-family: "PT Serif", serif;
          margin-bottom: 30px;
        }
        div {
          display: flex;
          align-items: center;
          margin: 20px 0;
          p {
            margin: auto 0;
            padding-right: 15px;
          }
          .icon {
            font-size: 15px;
          }
        }
        .social-icon {
          div {
            margin: 0;
          }
        }
      }
      .emergency {
        margin: 50px 0;
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #d0df56;
        i {
          font-size: 45px;
        }
        div {
          h4 {
            text-transform: uppercase;
            font-size: 20px;
            font-weight: 500;
            font-family: "PT Serif", serif;
          }
        }
      }
    }
    .doctor-disc {
      height: 100%;
      /* background: #fff1f1; */
      margin: auto;
      padding: 10px;
      p {
        font-size: 16px;
        line-height: 30px;
      }
      .data-table {
        border-top: 1px solid #e2e2e2;

        .item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #e2e2e2;

          .item-title {
            width: 40%;
            margin: 0;
            padding: 8px;
          }
          .item-data {
            width: 60%;
            margin: 0;
            padding: 8px 0;
          }
          .workdays {
            display: flex;
            align-items: center;
            p {
              margin: 0 10px;
              text-transform: capitalize;
              font-size: 18px;
              font-weight: 500;
              display: flex;
              align-items: center;

              .fa-check {
                color: #d0df56;
                padding: 0 3px;
              }
              span {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
  .button-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
    .arrow-btn {
      display: flex;
      align-items: center;
      font-family: "PT Serif", serif;
      cursor: pointer;
      div {
        padding: 0 10px;
        p {
          margin: 0;
          font-size: 14px;
          text-transform: uppercase;
        }
        h4 {
          font-size: 17px;
          font-weight: 600;
        }
      }
      .prev {
        text-align: left;
      }
      .next {
        text-align: right;
      }
      button {
        padding: 12px 18px;
        background: none;
        border: 1px solid #e2e2e2;
        i {
          font-size: 25px;
          color: #888;
        }
      }
    }
  }
`;
export default SingleDoctor;
