import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

function Sidebar() {
  return (
    <Wrapper>
      <Title>Navigation Title</Title>
      <Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/flow">Flowレイアウト</Link>
          </li>
        </ul>
      </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  width: 240px;
  min-height: 100vh;
  background: hsl(40deg 100% 95%);
  padding: 24px 8px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Navigation = styled.nav`
  padding: 8px;

  ul {
    margin-left: 16px;
    list-style-type: circle;
    color: dodgerblue;
  }

  a {
    display: block;
    padding: 6px 0;
    color: dodgerblue;
    text-decoration: none;
  }
`;

export default Sidebar;
