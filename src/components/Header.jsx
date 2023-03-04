import React from "react";
import styled from "styled-components";
import NavBar from "./header/NavBar";
import TopBar from "./header/TopBar";
const Header = () => {
  return (
    <div id="top">
      <TopBar />
      <NavBar />
    </div>
  );
};

export default Header;
