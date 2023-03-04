import React, { useEffect } from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CopyRight from "./components/CopyRight";
import GoTop from "./components/GoTop";
import Services from "./pages/Services";
import SingleService from "./pages/SingleService";
import Doctors from "./pages/Doctors";
import SingleDoctor from "./pages/SingleDoctor";
import Pricing from "./pages/Pricing";
import Caregivers from "./pages/Caregivers";
import Consultation from "./pages/Consultation";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-custom-alert";
import "react-custom-alert/dist/index.css";
import About from "./pages/About";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/singleservice/:id" element={<SingleService />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/caregivers" element={<Caregivers />} />
        <Route path="/singledoctor/:id" element={<SingleDoctor />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <CopyRight />
      <GoTop />
      <ToastContainer floatingTime={5000} />
    </Router>
  );
}

export default App;
