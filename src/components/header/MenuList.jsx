import React, { useState } from "react";
import { menuList } from "../../data/data";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuList = ({ menuOpen, setMenuOpen }) => {
  const [subList, setSubList] = useState([]);
  const [active, setActive] = useState(false);
  return (
    <Wrapper className="menu-list">
      {menuList.map((curElem, index) => {
        return (
          <div
            key={index}
            className="menu-items"
            onMouseMove={() => setSubList(curElem.list ? curElem.list : [])}
          >
            <div className="menu-item" onClick={() => setActive(!active)}>
              {curElem.list ? (
                <p>{curElem.name} </p>
              ) : (
                <NavLink
                  to={`/${curElem.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {curElem.name}
                </NavLink>
              )}

              {curElem.list ? <i className="fa-solid fa-angle-down"></i> : null}
            </div>

            {curElem.list ? (
              <div
                className={active ? "sub-menu-item active" : "sub-menu-item "}
              >
                {active
                  ? subList.map((subMenu, i) => (
                      <NavLink
                        to={`/${subMenu.id}`}
                        key={i}
                        onClick={() => setMenuOpen(false)}
                      >
                        {subMenu.title}
                      </NavLink>
                    ))
                  : " "}
              </div>
            ) : null}
          </div>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  .menu-items {
    padding: 5px;
    text-transform: uppercase;
    font-family: "PT Serif", serif;
    position: relative;
    font-size: 14px;
    .menu-item {
      color: #fff;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      p {
        margin: 0;
      }
      a {
        margin: 0;
        color: inherit;
        text-decoration: none;
      }
      i {
        margin-left: 8px;
      }
      &:hover {
        color: #d0df56;
      }
    }

    .sub-menu-item {
      display: none;
      width: 220px;
      background: #fff;
      flex-direction: column;
      padding: 15px 0;
      border-top: 5px solid #d0df56;
      box-shadow: 0 0 20px -10px #062a4d;
      border-radius: 5px;
      position: absolute;
      top: 40px;
      z-index: 10;
      a {
        color: #333;
        text-decoration: none;
        text-transform: capitalize;
        font-size: 15px;
        padding: 5px 25px;
        margin: 5px 0;
        &:hover {
          background: #e0e0e0;
        }
      }
    }
    &:hover {
      .sub-menu-item {
        &.active {
          display: flex;
        }
      }
    }
  }
`;
export default MenuList;
