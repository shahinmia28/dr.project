import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <img src="/images/logo.png" alt="logo" style={{ width: "180px" }} />
    </NavLink>
  );
};

export default Logo;
