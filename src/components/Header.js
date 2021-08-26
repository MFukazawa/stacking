import React from "react";
import styled from "styled-components";

function Header({ children }) {
  return (
    <Wrapper>
      <Title>重ね合わせコンテキストと<code>z-index</code></Title>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 75px;
  background: hsl(270deg 29% 92%);
  padding: 24px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.75rem;
`;

export default Header;
