import Appointment from "../components/Appointment";
import ExpectUs from "../components/ExpectUs";
import Hero from "../components/Hero";
import Poster from "../components/Poster";
import Services from "../components/ServicesSection";
import Subscribe from "../components/Subscribe";
import Trust from "../components/Trust";

const Home = () => {
  return (
    <div>
      <Hero />
      <Poster />
      <Services />
      <Appointment />
      <ExpectUs />
      <Trust />
      <Subscribe />
    </div>
  );
};

export default Home;
