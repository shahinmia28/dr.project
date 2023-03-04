import styled from "styled-components";
import AboutMe from "../components/about/AboutMe";
import OurStory from "../components/about/OurStory";
import CommonHero from "../components/CommonHero";

const About = () => {
  return (
    <Wrapper>
      <CommonHero title="About" bgImg="single-service-hero.jpg" />
      <AboutMe />
      <OurStory />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
`;
export default About;
