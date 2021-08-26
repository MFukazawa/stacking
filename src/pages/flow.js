import React from 'react'
import styled from "styled-components";

const Flow = () => {
  return (
      <MainContent>
        <Go />
        <Lakers />
      </MainContent>
  )
}

const Go = styled.div`
  width: 100px;
  height: 100px;
  background: hsl(271deg 56% 33%);
`

const Lakers = styled.div`
  width: 100px;
  height: 100px;
  background: hsl(41deg 98% 57%);
`

const MainContent = styled.main`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 64px;
`;


export default Flow
