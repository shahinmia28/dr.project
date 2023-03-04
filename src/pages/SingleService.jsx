import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommonHero from "../components/CommonHero";
import SingleServiceMain from "../components/SingleServiceData/SingleServiceMain";
import SingleServiceSite from "../components/SingleServiceData/SingleServiceSite";
import SubscribeAppoint from "../components/SubscribeAppoint";
import { servicesData } from "../data/data";

const SingleService = () => {
  const { id } = useParams();
  return (
    <Wrapper>
      <div>
        <CommonHero title={id} bgImg="single-service-hero.jpg" />
        <div className="container">
          <div className="row">
            <div className="col col-12 col-lg-9">
              {servicesData.map((curElem, i) => {
                return id === curElem.id ? (
                  <SingleServiceMain data={curElem} key={i} />
                ) : null;
              })}
            </div>
            <div className="col col-12 col-lg-3">
              <SingleServiceSite />
            </div>
          </div>
        </div>
      </div>

      <SubscribeAppoint />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .row {
    div {
      padding: 0;
    }
  }
`;
export default SingleService;
